import { toc as rehypeToc } from "@jsdevtools/rehype-toc";
import { iteratePaginatedAPI, isFullBlock, } from "@notionhq/client";
import * as transformedPropertySchema from "./schemas/transformed-properties.js";
import { fileToImageAsset, fileToUrl } from "./format.js";
// #region Processor
import notionRehype from "notion-rehype-k";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";
const baseProcessor = unified()
    .use(notionRehype, {}) // Parse Notion blocks to rehype AST
    .use(rehypeSlug)
    .use(
// @ts-ignore
rehypeKatex) // Then you can use any rehype plugins to enrich the AST
    .use(rehypeStringify); // Turn AST to HTML string
export function buildProcessor(rehypePlugins) {
    let headings = [];
    const processorWithToc = baseProcessor().use(rehypeToc, {
        customizeTOC(toc) {
            headings = extractTocHeadings(toc);
            return false;
        },
    });
    const processorPromise = rehypePlugins.then((plugins) => {
        let processor = processorWithToc;
        for (const [plugin, options] of plugins) {
            processor = processor.use(plugin, options);
        }
        return processor;
    });
    return async function process(blocks) {
        const processor = await processorPromise;
        const vFile = await processor.process({ data: blocks });
        return { vFile, headings };
    };
}
// #endregion
async function awaitAll(iterable) {
    const result = [];
    for await (const item of iterable) {
        result.push(item);
    }
    return result;
}
/**
 * Return a generator that yields all blocks in a Notion page, recursively.
 * @param blockId ID of block to get children for.
 * @param fetchImage Function that fetches an image and returns a local path.
 */
async function* listBlocks(client, blockId, fetchImage) {
    for await (const block of iteratePaginatedAPI(client.blocks.children.list, {
        block_id: blockId,
    })) {
        if (!isFullBlock(block)) {
            continue;
        }
        if (block.has_children) {
            const children = await awaitAll(listBlocks(client, block.id, fetchImage));
            // @ts-ignore -- TODO: Make TypeScript happy here
            block[block.type].children = children;
        }
        // Specialized handling for image blocks
        if (block.type === "image") {
            // Fetch remote image and store it locally
            const url = await fetchImage(block.image);
            // notion-rehype-k incorrectly expects "file" to be a string instead of an object
            yield {
                ...block,
                image: {
                    type: block.image.type,
                    [block.image.type]: url,
                    caption: block.image.caption,
                },
            };
        }
        // Handle video blocks
        else if (block.type === "video") {
            yield {
                ...block,
                video: {
                    type: block.video.type,
                    [block.video.type]: block.video.type === "external"
                        ? block.video.external.url
                        : block.video.file.url,
                    caption: block.video.caption,
                },
            };
        }
        else {
            yield block;
        }
    }
}
function extractTocHeadings(toc) {
    if (toc.tagName !== "nav") {
        throw new Error(`Expected nav, got ${toc.tagName}`);
    }
    function listElementToTree(ol, depth) {
        return ol.children.flatMap((li) => {
            const [_link, subList] = li.children;
            const link = _link;
            const currentHeading = {
                depth,
                text: link.children[0].value,
                slug: link.properties.href.slice(1),
            };
            let headings = [currentHeading];
            if (subList) {
                headings = headings.concat(listElementToTree(subList, depth + 1));
            }
            return headings;
        });
    }
    return listElementToTree(toc.children[0], 0);
}
export class NotionPageRenderer {
    client;
    page;
    #imagePaths = [];
    #logger;
    /**
     * @param client Notion API client.
     * @param page Notion page object including page ID and properties. Does not include blocks.
     * @param parentLogger Logger to use for logging messages.
     */
    constructor(client, page, parentLogger) {
        this.client = client;
        this.page = page;
        // Create a sub-logger labelled with the page name
        const pageTitle = transformedPropertySchema.title.safeParse(page.properties.Name);
        this.#logger = parentLogger.fork(`page ${page.id} (Name ${pageTitle.success ? pageTitle.data : "unknown"})`);
        if (!pageTitle.success) {
            this.#logger.warn(`Failed to parse property Name as title: ${pageTitle.error.toString()}`);
        }
    }
    /**
     * Return page properties for Astro to use.
     */
    getPageData() {
        const { page } = this;
        return {
            id: page.id,
            data: {
                icon: page.icon,
                cover: page.cover,
                archived: page.archived,
                in_trash: page.in_trash,
                url: page.url,
                public_url: page.public_url,
                properties: page.properties,
            },
        };
    }
    /**
     * Return rendered HTML for the page.
     * @param process Processor function to transform Notion blocks into HTML.
     * This is created once for all pages then shared.
     */
    async render(process) {
        this.#logger.debug("Rendering");
        try {
            const blocks = await awaitAll(listBlocks(this.client, this.page.id, this.#fetchImage));
            const { vFile, headings } = await process(blocks);
            this.#logger.debug("Rendered");
            return {
                html: vFile.toString(),
                metadata: {
                    headings,
                    imagePaths: this.#imagePaths,
                },
            };
        }
        catch (error) {
            this.#logger.error(`Failed to render: ${getErrorMessage(error)}`);
            return undefined;
        }
    }
    /**
     * Helper function to convert remote Notion images into local images in Astro.
     * Additionally saves the path in `this.#imagePaths`.
     * @param imageFileObject Notion file object representing an image.
     * @returns Local path to the image, or undefined if the image could not be fetched.
     */
    #fetchImage = async (imageFileObject) => {
        try {
            const fetchedImageData = await fileToImageAsset(imageFileObject);
            this.#imagePaths.push(fetchedImageData.src);
            return fetchedImageData.src;
        }
        catch (error) {
            this.#logger.error(`Failed to fetch image when rendering page.
Have you added \`image: { remotePatterns: [{ protocol: "https", hostname: "*.amazonaws.com" }] }\` to your Astro config file?\n
Error: ${getErrorMessage(error)}`);
            // Fall back to using the remote URL directly.
            return fileToUrl(imageFileObject);
        }
    };
}
function getErrorMessage(error) {
    if (error instanceof Error) {
        return error.message;
    }
    else if (typeof error === "string") {
        return error;
    }
    else {
        return "Unknown error";
    }
}
