import { Client } from "@notionhq/client";
declare class NotionImageHandler {
    private readonly client;
    private readonly cache;
    constructor(client: Client);
    private parseS3Url;
    getImageUrl(notionImageBlock: any): Promise<string>;
}
export declare function createImageHandler(client: Client): Promise<NotionImageHandler>;
export {};
//# sourceMappingURL=NotionImageHandler.d.ts.map