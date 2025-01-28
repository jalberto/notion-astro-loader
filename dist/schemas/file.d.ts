import { z } from "astro/zod";
export declare const filePropertyResponse: z.ZodObject<{
    type: z.ZodLiteral<"file">;
    file: z.ZodObject<{
        url: z.ZodString;
        expiry_time: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        expiry_time: string;
    }, {
        url: string;
        expiry_time: string;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "file";
    file: {
        url: string;
        expiry_time: string;
    };
}, {
    type: "file";
    file: {
        url: string;
        expiry_time: string;
    };
}>;
export declare const externalPropertyResponse: z.ZodObject<{
    type: z.ZodLiteral<"external">;
    external: z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "external";
    external: {
        url: string;
    };
}, {
    type: "external";
    external: {
        url: string;
    };
}>;
//# sourceMappingURL=file.d.ts.map