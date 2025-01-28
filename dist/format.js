import { getImage } from "astro:assets";
/**
 * Extract a plain string from a list of rich text items.
 *
 * @see https://developers.notion.com/reference/rich-text
 *
 * @example
 * richTextToPlainText(page.properties.Name.title)
 */
export function richTextToPlainText(data) {
    return data.map((text) => text.plain_text).join("");
}
export function fileToUrl(file) {
    switch (file?.type) {
        case "external":
            return file.external.url;
        case "file":
            return file.file.url;
        default:
            return undefined;
    }
}
/**
 * Extract and locally cache the image from a file object.
 * @see https://developers.notion.com/reference/file-object
 */
export async function fileToImageAsset(file) {
    return getImage({
        src: fileToUrl(file),
        inferSize: true,
    });
}
/**
 * Replace date strings with date objects.
 *
 * @see https://developers.notion.com/reference/page-property-values#date
 */
export function dateToDateObjects(dateResponse) {
    if (dateResponse === null) {
        return null;
    }
    return {
        start: new Date(dateResponse.start),
        end: dateResponse.end ? new Date(dateResponse.end) : null,
        time_zone: dateResponse.time_zone,
    };
}
