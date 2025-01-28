import { type Client } from "@notionhq/client";
import type { AstroIntegrationLogger, MarkdownHeading } from "astro";
import type { ParseDataOptions } from "astro/loaders";
import type { NotionPageData, PageObjectResponse } from "./types.js";
import { type Plugin } from "unified";
export type RehypePlugin = Plugin<any[], any>;
export declare function buildProcessor(rehypePlugins: Promise<ReadonlyArray<readonly [RehypePlugin, any]>>): (blocks: unknown[]) => Promise<{
    vFile: import("vfile").VFile;
    headings: MarkdownHeading[];
}>;
export interface RenderedNotionEntry {
    html: string;
    metadata: {
        imagePaths: string[];
        headings: MarkdownHeading[];
    };
}
export declare class NotionPageRenderer {
    #private;
    private readonly client;
    private readonly page;
    /**
     * @param client Notion API client.
     * @param page Notion page object including page ID and properties. Does not include blocks.
     * @param parentLogger Logger to use for logging messages.
     */
    constructor(client: Client, page: PageObjectResponse, parentLogger: AstroIntegrationLogger);
    /**
     * Return page properties for Astro to use.
     */
    getPageData(): ParseDataOptions<NotionPageData>;
    /**
     * Return rendered HTML for the page.
     * @param process Processor function to transform Notion blocks into HTML.
     * This is created once for all pages then shared.
     */
    render(process: ReturnType<typeof buildProcessor>): Promise<RenderedNotionEntry | undefined>;
}
//# sourceMappingURL=render.d.ts.map