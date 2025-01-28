import type { Client } from "@notionhq/client";
import { z } from "astro/zod";
export declare function propertiesSchemaForDatabase(client: Client, databaseId: string): Promise<z.ZodObject<{
    [k: string]: z.ZodTypeAny;
}, "strip", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>>;
//# sourceMappingURL=database-properties.d.ts.map