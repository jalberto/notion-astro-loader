import { z } from "astro/zod";
import * as rawPropertyType from "./schemas/raw-properties.js";
export async function propertiesSchemaForDatabase(client, databaseId) {
    const database = await client.databases.retrieve({ database_id: databaseId });
    const schemaForDatabaseProperty = (propertyConfig) => rawPropertyType[propertyConfig.type];
    const schema = Object.fromEntries(Object.entries(database.properties).map(([key, value]) => {
        let propertySchema = schemaForDatabaseProperty(value);
        if (value.description) {
            propertySchema = propertySchema.describe(value.description);
        }
        if (key !== "Name") {
            // propertySchema = propertySchema.optional();
        }
        return [key, propertySchema];
    }));
    return z.object(schema);
}
