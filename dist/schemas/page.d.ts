import { z } from "astro/zod";
export declare const pageObjectSchema: z.ZodObject<{
    icon: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"emoji">;
        emoji: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "emoji";
        emoji: string;
    }, {
        type: "emoji";
        emoji: string;
    }>]>>;
    cover: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>]>>;
    archived: z.ZodBoolean;
    in_trash: z.ZodBoolean;
    url: z.ZodString;
    public_url: z.ZodNullable<z.ZodString>;
    properties: z.ZodObject<{}, "strip", z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.objectOutputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">, z.objectInputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">>;
}, "strip", z.ZodTypeAny, {
    url: string;
    properties: {} & {
        [k: string]: z.objectOutputType<{
            type: z.ZodString;
            id: z.ZodString;
        }, z.ZodTypeAny, "passthrough">;
    };
    icon: {
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
    } | {
        type: "external";
        external: {
            url: string;
        };
    } | {
        type: "emoji";
        emoji: string;
    } | null;
    cover: {
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
    } | {
        type: "external";
        external: {
            url: string;
        };
    } | null;
    archived: boolean;
    in_trash: boolean;
    public_url: string | null;
}, {
    url: string;
    properties: {} & {
        [k: string]: z.objectInputType<{
            type: z.ZodString;
            id: z.ZodString;
        }, z.ZodTypeAny, "passthrough">;
    };
    icon: {
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
    } | {
        type: "external";
        external: {
            url: string;
        };
    } | {
        type: "emoji";
        emoji: string;
    } | null;
    cover: {
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
    } | {
        type: "external";
        external: {
            url: string;
        };
    } | null;
    archived: boolean;
    in_trash: boolean;
    public_url: string | null;
}>;
/**
 * Defines a schema for a Notion page with a specific set of properties.
 * @example
 * const schema = notionPageSchema({
 *   properties: {
 *     Name: z.object({}),
 *     Hidden: transformedPropertySchema.checkbox.optional(),
 *   }
 * });
 */
export declare function notionPageSchema<Schema extends z.ZodTypeAny>({ properties, }: {
    properties: Schema;
}): z.ZodObject<z.objectUtil.extendShape<{
    icon: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"emoji">;
        emoji: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "emoji";
        emoji: string;
    }, {
        type: "emoji";
        emoji: string;
    }>]>>;
    cover: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>]>>;
    archived: z.ZodBoolean;
    in_trash: z.ZodBoolean;
    url: z.ZodString;
    public_url: z.ZodNullable<z.ZodString>;
    properties: z.ZodObject<{}, "strip", z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.objectOutputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">, z.objectInputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">>;
}, {
    properties: Schema;
}>, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<z.objectUtil.extendShape<{
    icon: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"emoji">;
        emoji: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "emoji";
        emoji: string;
    }, {
        type: "emoji";
        emoji: string;
    }>]>>;
    cover: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>]>>;
    archived: z.ZodBoolean;
    in_trash: z.ZodBoolean;
    url: z.ZodString;
    public_url: z.ZodNullable<z.ZodString>;
    properties: z.ZodObject<{}, "strip", z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.objectOutputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">, z.objectInputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">>;
}, {
    properties: Schema;
}>>, any> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<z.objectUtil.extendShape<{
    icon: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"emoji">;
        emoji: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "emoji";
        emoji: string;
    }, {
        type: "emoji";
        emoji: string;
    }>]>>;
    cover: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>]>>;
    archived: z.ZodBoolean;
    in_trash: z.ZodBoolean;
    url: z.ZodString;
    public_url: z.ZodNullable<z.ZodString>;
    properties: z.ZodObject<{}, "strip", z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.objectOutputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">, z.objectInputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">>;
}, {
    properties: Schema;
}>>, any>[k]; } : never, z.baseObjectInputType<z.objectUtil.extendShape<{
    icon: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"emoji">;
        emoji: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "emoji";
        emoji: string;
    }, {
        type: "emoji";
        emoji: string;
    }>]>>;
    cover: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>]>>;
    archived: z.ZodBoolean;
    in_trash: z.ZodBoolean;
    url: z.ZodString;
    public_url: z.ZodNullable<z.ZodString>;
    properties: z.ZodObject<{}, "strip", z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.objectOutputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">, z.objectInputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">>;
}, {
    properties: Schema;
}>> extends infer T_1 ? { [k_1 in keyof T_1]: z.baseObjectInputType<z.objectUtil.extendShape<{
    icon: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>, z.ZodObject<{
        type: z.ZodLiteral<"emoji">;
        emoji: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "emoji";
        emoji: string;
    }, {
        type: "emoji";
        emoji: string;
    }>]>>;
    cover: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>, z.ZodObject<{
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
    }>]>>;
    archived: z.ZodBoolean;
    in_trash: z.ZodBoolean;
    url: z.ZodString;
    public_url: z.ZodNullable<z.ZodString>;
    properties: z.ZodObject<{}, "strip", z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, z.objectOutputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">, z.objectInputType<{}, z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
        id: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "strip">>;
}, {
    properties: Schema;
}>>[k_1]; } : never>;
//# sourceMappingURL=page.d.ts.map