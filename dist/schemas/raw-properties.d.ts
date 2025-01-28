import { z } from "astro/zod";
export declare const number: z.ZodObject<{
    type: z.ZodLiteral<"number">;
    id: z.ZodString;
} & {
    number: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    number: number | null;
    type: "number";
    id: string;
}, {
    number: number | null;
    type: "number";
    id: string;
}>;
export declare const url: z.ZodObject<{
    type: z.ZodLiteral<"url">;
    id: z.ZodString;
} & {
    url: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "url";
    url: string | null;
    id: string;
}, {
    type: "url";
    url: string | null;
    id: string;
}>;
export declare const select: z.ZodObject<{
    type: z.ZodLiteral<"select">;
    id: z.ZodString;
} & {
    select: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        color: string;
    }, {
        id: string;
        name: string;
        color: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "select";
    id: string;
    select: {
        id: string;
        name: string;
        color: string;
    } | null;
}, {
    type: "select";
    id: string;
    select: {
        id: string;
        name: string;
        color: string;
    } | null;
}>;
export declare const multi_select: z.ZodObject<{
    type: z.ZodLiteral<"multi_select">;
    id: z.ZodString;
} & {
    multi_select: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        color: string;
    }, {
        id: string;
        name: string;
        color: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "multi_select";
    id: string;
    multi_select: {
        id: string;
        name: string;
        color: string;
    }[];
}, {
    type: "multi_select";
    id: string;
    multi_select: {
        id: string;
        name: string;
        color: string;
    }[];
}>;
export declare const status: z.ZodObject<{
    type: z.ZodLiteral<"status">;
    id: z.ZodString;
} & {
    status: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        color: string;
    }, {
        id: string;
        name: string;
        color: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "status";
    status: {
        id: string;
        name: string;
        color: string;
    } | null;
    id: string;
}, {
    type: "status";
    status: {
        id: string;
        name: string;
        color: string;
    } | null;
    id: string;
}>;
export declare const date: z.ZodObject<{
    type: z.ZodLiteral<"date">;
    id: z.ZodString;
} & {
    date: z.ZodNullable<z.ZodObject<{
        start: z.ZodUnion<[z.ZodString, z.ZodString]>;
        end: z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>;
        time_zone: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        start: string;
        end: string | null;
        time_zone: string | null;
    }, {
        start: string;
        end: string | null;
        time_zone: string | null;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "date";
    date: {
        start: string;
        end: string | null;
        time_zone: string | null;
    } | null;
    id: string;
}, {
    type: "date";
    date: {
        start: string;
        end: string | null;
        time_zone: string | null;
    } | null;
    id: string;
}>;
export declare const email: z.ZodObject<{
    type: z.ZodLiteral<"email">;
    id: z.ZodString;
} & {
    email: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "email";
    id: string;
    email: string | null;
}, {
    type: "email";
    id: string;
    email: string | null;
}>;
export declare const phone_number: z.ZodObject<{
    type: z.ZodLiteral<"phone_number">;
    id: z.ZodString;
} & {
    phone_number: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "phone_number";
    id: string;
    phone_number: string | null;
}, {
    type: "phone_number";
    id: string;
    phone_number: string | null;
}>;
export declare const checkbox: z.ZodObject<{
    type: z.ZodLiteral<"checkbox">;
    id: z.ZodString;
} & {
    checkbox: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    type: "checkbox";
    id: string;
    checkbox: boolean;
}, {
    type: "checkbox";
    id: string;
    checkbox: boolean;
}>;
export declare const files: z.ZodObject<{
    type: z.ZodLiteral<"files">;
    id: z.ZodString;
} & {
    files: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
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
    }, {
        name: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
        name: string;
    }, {
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
        name: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"external">;
        external: z.ZodObject<{
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
        }, {
            url: string;
        }>;
    }, {
        name: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        type: "external";
        external: {
            url: string;
        };
        name: string;
    }, {
        type: "external";
        external: {
            url: string;
        };
        name: string;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "files";
    id: string;
    files: ({
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
        name: string;
    } | {
        type: "external";
        external: {
            url: string;
        };
        name: string;
    })[];
}, {
    type: "files";
    id: string;
    files: ({
        type: "file";
        file: {
            url: string;
            expiry_time: string;
        };
        name: string;
    } | {
        type: "external";
        external: {
            url: string;
        };
        name: string;
    })[];
}>;
export declare const created_by: z.ZodObject<{
    type: z.ZodLiteral<"created_by">;
    id: z.ZodString;
} & {
    created_by: z.ZodObject<{
        id: z.ZodString;
        object: z.ZodLiteral<"user">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        object: z.ZodLiteral<"user">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        object: z.ZodLiteral<"user">;
    }, z.ZodTypeAny, "passthrough">>;
}, "strip", z.ZodTypeAny, {
    type: "created_by";
    id: string;
    created_by: {
        object: "user";
        id: string;
    } & {
        [k: string]: unknown;
    };
}, {
    type: "created_by";
    id: string;
    created_by: {
        object: "user";
        id: string;
    } & {
        [k: string]: unknown;
    };
}>;
export declare const created_time: z.ZodObject<{
    type: z.ZodLiteral<"created_time">;
    id: z.ZodString;
} & {
    created_time: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "created_time";
    id: string;
    created_time: string;
}, {
    type: "created_time";
    id: string;
    created_time: string;
}>;
export declare const last_edited_by: z.ZodObject<{
    type: z.ZodLiteral<"last_edited_by">;
    id: z.ZodString;
} & {
    last_edited_by: z.ZodObject<{
        id: z.ZodString;
        object: z.ZodLiteral<"user">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        object: z.ZodLiteral<"user">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        object: z.ZodLiteral<"user">;
    }, z.ZodTypeAny, "passthrough">>;
}, "strip", z.ZodTypeAny, {
    type: "last_edited_by";
    id: string;
    last_edited_by: {
        object: "user";
        id: string;
    } & {
        [k: string]: unknown;
    };
}, {
    type: "last_edited_by";
    id: string;
    last_edited_by: {
        object: "user";
        id: string;
    } & {
        [k: string]: unknown;
    };
}>;
export declare const last_edited_time: z.ZodObject<{
    type: z.ZodLiteral<"last_edited_time">;
    id: z.ZodString;
} & {
    last_edited_time: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "last_edited_time";
    id: string;
    last_edited_time: string;
}, {
    type: "last_edited_time";
    id: string;
    last_edited_time: string;
}>;
export declare const formula: z.ZodObject<{
    type: z.ZodLiteral<"formula">;
    id: z.ZodString;
} & {
    formula: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"string">;
        string: z.ZodNullable<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        string: string | null;
        type: "string";
    }, {
        string: string | null;
        type: "string";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"date">;
        date: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "date";
        date: string | null;
    }, {
        type: "date";
        date: string | null;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"number">;
        number: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        number: number | null;
        type: "number";
    }, {
        number: number | null;
        type: "number";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"boolean">;
        boolean: z.ZodNullable<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        boolean: boolean | null;
        type: "boolean";
    }, {
        boolean: boolean | null;
        type: "boolean";
    }>]>;
}, "strip", z.ZodTypeAny, {
    type: "formula";
    id: string;
    formula: {
        string: string | null;
        type: "string";
    } | {
        type: "date";
        date: string | null;
    } | {
        number: number | null;
        type: "number";
    } | {
        boolean: boolean | null;
        type: "boolean";
    };
}, {
    type: "formula";
    id: string;
    formula: {
        string: string | null;
        type: "string";
    } | {
        type: "date";
        date: string | null;
    } | {
        number: number | null;
        type: "number";
    } | {
        boolean: boolean | null;
        type: "boolean";
    };
}>;
export declare const title: z.ZodObject<{
    type: z.ZodLiteral<"title">;
    id: z.ZodString;
} & {
    title: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
        annotations: z.ZodObject<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
        plain_text: z.ZodString;
        href: z.ZodNullable<z.ZodString>;
    }, {
        type: z.ZodLiteral<"text">;
        text: z.ZodObject<{
            content: z.ZodString;
            link: z.ZodNullable<z.ZodObject<{
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
            }, {
                url: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            link: {
                url: string;
            } | null;
            content: string;
        }, {
            link: {
                url: string;
            } | null;
            content: string;
        }>;
    }>, "strip", z.ZodTypeAny, {
        type: "text";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        text: {
            link: {
                url: string;
            } | null;
            content: string;
        };
    }, {
        type: "text";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        text: {
            link: {
                url: string;
            } | null;
            content: string;
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        annotations: z.ZodObject<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
        plain_text: z.ZodString;
        href: z.ZodNullable<z.ZodString>;
    }, {
        type: z.ZodLiteral<"mention">;
        mention: z.ZodObject<{
            type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, z.ZodTypeAny, "passthrough">>;
    }>, "strip", z.ZodTypeAny, {
        type: "mention";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        mention: {
            type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
        } & {
            [k: string]: unknown;
        };
    }, {
        type: "mention";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        mention: {
            type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
        } & {
            [k: string]: unknown;
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        annotations: z.ZodObject<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
        plain_text: z.ZodString;
        href: z.ZodNullable<z.ZodString>;
    }, {
        type: z.ZodLiteral<"equation">;
        equation: z.ZodObject<{
            expression: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            expression: string;
        }, {
            expression: string;
        }>;
    }>, "strip", z.ZodTypeAny, {
        type: "equation";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        equation: {
            expression: string;
        };
    }, {
        type: "equation";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        equation: {
            expression: string;
        };
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "title";
    id: string;
    title: ({
        type: "text";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        text: {
            link: {
                url: string;
            } | null;
            content: string;
        };
    } | {
        type: "mention";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        mention: {
            type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
        } & {
            [k: string]: unknown;
        };
    } | {
        type: "equation";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        equation: {
            expression: string;
        };
    })[];
}, {
    type: "title";
    id: string;
    title: ({
        type: "text";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        text: {
            link: {
                url: string;
            } | null;
            content: string;
        };
    } | {
        type: "mention";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        mention: {
            type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
        } & {
            [k: string]: unknown;
        };
    } | {
        type: "equation";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        equation: {
            expression: string;
        };
    })[];
}>;
export declare const rich_text: z.ZodObject<{
    type: z.ZodLiteral<"rich_text">;
    id: z.ZodString;
} & {
    rich_text: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
        annotations: z.ZodObject<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
        plain_text: z.ZodString;
        href: z.ZodNullable<z.ZodString>;
    }, {
        type: z.ZodLiteral<"text">;
        text: z.ZodObject<{
            content: z.ZodString;
            link: z.ZodNullable<z.ZodObject<{
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
            }, {
                url: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            link: {
                url: string;
            } | null;
            content: string;
        }, {
            link: {
                url: string;
            } | null;
            content: string;
        }>;
    }>, "strip", z.ZodTypeAny, {
        type: "text";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        text: {
            link: {
                url: string;
            } | null;
            content: string;
        };
    }, {
        type: "text";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        text: {
            link: {
                url: string;
            } | null;
            content: string;
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        annotations: z.ZodObject<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
        plain_text: z.ZodString;
        href: z.ZodNullable<z.ZodString>;
    }, {
        type: z.ZodLiteral<"mention">;
        mention: z.ZodObject<{
            type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, z.ZodTypeAny, "passthrough">>;
    }>, "strip", z.ZodTypeAny, {
        type: "mention";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        mention: {
            type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
        } & {
            [k: string]: unknown;
        };
    }, {
        type: "mention";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        mention: {
            type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
        } & {
            [k: string]: unknown;
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        annotations: z.ZodObject<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            bold: z.ZodBoolean;
            italic: z.ZodBoolean;
            strikethrough: z.ZodBoolean;
            underline: z.ZodBoolean;
            code: z.ZodBoolean;
            color: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>;
        plain_text: z.ZodString;
        href: z.ZodNullable<z.ZodString>;
    }, {
        type: z.ZodLiteral<"equation">;
        equation: z.ZodObject<{
            expression: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            expression: string;
        }, {
            expression: string;
        }>;
    }>, "strip", z.ZodTypeAny, {
        type: "equation";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        equation: {
            expression: string;
        };
    }, {
        type: "equation";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        equation: {
            expression: string;
        };
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "rich_text";
    id: string;
    rich_text: ({
        type: "text";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        text: {
            link: {
                url: string;
            } | null;
            content: string;
        };
    } | {
        type: "mention";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        mention: {
            type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
        } & {
            [k: string]: unknown;
        };
    } | {
        type: "equation";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        equation: {
            expression: string;
        };
    })[];
}, {
    type: "rich_text";
    id: string;
    rich_text: ({
        type: "text";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        text: {
            link: {
                url: string;
            } | null;
            content: string;
        };
    } | {
        type: "mention";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        mention: {
            type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
        } & {
            [k: string]: unknown;
        };
    } | {
        type: "equation";
        annotations: {
            code: boolean;
            color: string;
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
        } & {
            [k: string]: unknown;
        };
        plain_text: string;
        href: string | null;
        equation: {
            expression: string;
        };
    })[];
}>;
export declare const people: z.ZodObject<{
    type: z.ZodLiteral<"people">;
    id: z.ZodString;
} & {
    people: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        object: z.ZodLiteral<"user">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        object: z.ZodLiteral<"user">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        object: z.ZodLiteral<"user">;
    }, z.ZodTypeAny, "passthrough">>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "people";
    id: string;
    people: z.objectOutputType<{
        id: z.ZodString;
        object: z.ZodLiteral<"user">;
    }, z.ZodTypeAny, "passthrough">[];
}, {
    type: "people";
    id: string;
    people: z.objectInputType<{
        id: z.ZodString;
        object: z.ZodLiteral<"user">;
    }, z.ZodTypeAny, "passthrough">[];
}>;
export declare const relation: z.ZodObject<{
    type: z.ZodLiteral<"relation">;
    id: z.ZodString;
} & {
    relation: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "relation";
    id: string;
    relation: {
        id: string;
    }[];
}, {
    type: "relation";
    id: string;
    relation: {
        id: string;
    }[];
}>;
export declare const rollup: z.ZodObject<{
    type: z.ZodLiteral<"rollup">;
    id: z.ZodString;
} & {
    rollup: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        function: z.ZodString;
        type: z.ZodLiteral<"number">;
        number: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        number: number | null;
        function: string;
        type: "number";
    }, {
        number: number | null;
        function: string;
        type: "number";
    }>, z.ZodObject<{
        function: z.ZodString;
        type: z.ZodLiteral<"date">;
        date: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        function: string;
        type: "date";
        date: string | null;
    }, {
        function: string;
        type: "date";
        date: string | null;
    }>, z.ZodObject<{
        function: z.ZodString;
        type: z.ZodLiteral<"array">;
        array: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"title">;
            title: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
                annotations: z.ZodObject<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">>;
                plain_text: z.ZodString;
                href: z.ZodNullable<z.ZodString>;
            }, {
                type: z.ZodLiteral<"text">;
                text: z.ZodObject<{
                    content: z.ZodString;
                    link: z.ZodNullable<z.ZodObject<{
                        url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                    }, {
                        url: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                }, {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                }>;
            }>, "strip", z.ZodTypeAny, {
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            }, {
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            }>, z.ZodObject<z.objectUtil.extendShape<{
                annotations: z.ZodObject<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">>;
                plain_text: z.ZodString;
                href: z.ZodNullable<z.ZodString>;
            }, {
                type: z.ZodLiteral<"mention">;
                mention: z.ZodObject<{
                    type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
                }, z.ZodTypeAny, "passthrough">>;
            }>, "strip", z.ZodTypeAny, {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            }, {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            }>, z.ZodObject<z.objectUtil.extendShape<{
                annotations: z.ZodObject<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">>;
                plain_text: z.ZodString;
                href: z.ZodNullable<z.ZodString>;
            }, {
                type: z.ZodLiteral<"equation">;
                equation: z.ZodObject<{
                    expression: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    expression: string;
                }, {
                    expression: string;
                }>;
            }>, "strip", z.ZodTypeAny, {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            }, {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "title";
            title: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        }, {
            type: "title";
            title: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        }>, z.ZodObject<{
            type: z.ZodLiteral<"rich_text">;
            rich_text: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
                annotations: z.ZodObject<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">>;
                plain_text: z.ZodString;
                href: z.ZodNullable<z.ZodString>;
            }, {
                type: z.ZodLiteral<"text">;
                text: z.ZodObject<{
                    content: z.ZodString;
                    link: z.ZodNullable<z.ZodObject<{
                        url: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        url: string;
                    }, {
                        url: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                }, {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                }>;
            }>, "strip", z.ZodTypeAny, {
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            }, {
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            }>, z.ZodObject<z.objectUtil.extendShape<{
                annotations: z.ZodObject<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">>;
                plain_text: z.ZodString;
                href: z.ZodNullable<z.ZodString>;
            }, {
                type: z.ZodLiteral<"mention">;
                mention: z.ZodObject<{
                    type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
                }, z.ZodTypeAny, "passthrough">>;
            }>, "strip", z.ZodTypeAny, {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            }, {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            }>, z.ZodObject<z.objectUtil.extendShape<{
                annotations: z.ZodObject<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    bold: z.ZodBoolean;
                    italic: z.ZodBoolean;
                    strikethrough: z.ZodBoolean;
                    underline: z.ZodBoolean;
                    code: z.ZodBoolean;
                    color: z.ZodString;
                }, z.ZodTypeAny, "passthrough">>;
                plain_text: z.ZodString;
                href: z.ZodNullable<z.ZodString>;
            }, {
                type: z.ZodLiteral<"equation">;
                equation: z.ZodObject<{
                    expression: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    expression: string;
                }, {
                    expression: string;
                }>;
            }>, "strip", z.ZodTypeAny, {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            }, {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "rich_text";
            rich_text: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        }, {
            type: "rich_text";
            rich_text: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        }>, z.ZodObject<{
            type: z.ZodLiteral<"people">;
            people: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                object: z.ZodLiteral<"user">;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                object: z.ZodLiteral<"user">;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                object: z.ZodLiteral<"user">;
            }, z.ZodTypeAny, "passthrough">>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "people";
            people: z.objectOutputType<{
                id: z.ZodString;
                object: z.ZodLiteral<"user">;
            }, z.ZodTypeAny, "passthrough">[];
        }, {
            type: "people";
            people: z.objectInputType<{
                id: z.ZodString;
                object: z.ZodLiteral<"user">;
            }, z.ZodTypeAny, "passthrough">[];
        }>, z.ZodObject<{
            type: z.ZodLiteral<"relation">;
            relation: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "relation";
            relation: {
                id: string;
            }[];
        }, {
            type: "relation";
            relation: {
                id: string;
            }[];
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        function: string;
        type: "array";
        array: ({
            type: "title";
            title: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        } | {
            type: "rich_text";
            rich_text: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        } | {
            type: "people";
            people: z.objectOutputType<{
                id: z.ZodString;
                object: z.ZodLiteral<"user">;
            }, z.ZodTypeAny, "passthrough">[];
        } | {
            type: "relation";
            relation: {
                id: string;
            }[];
        })[];
    }, {
        function: string;
        type: "array";
        array: ({
            type: "title";
            title: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        } | {
            type: "rich_text";
            rich_text: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        } | {
            type: "people";
            people: z.objectInputType<{
                id: z.ZodString;
                object: z.ZodLiteral<"user">;
            }, z.ZodTypeAny, "passthrough">[];
        } | {
            type: "relation";
            relation: {
                id: string;
            }[];
        })[];
    }>]>;
}, "strip", z.ZodTypeAny, {
    type: "rollup";
    id: string;
    rollup: {
        number: number | null;
        function: string;
        type: "number";
    } | {
        function: string;
        type: "date";
        date: string | null;
    } | {
        function: string;
        type: "array";
        array: ({
            type: "title";
            title: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        } | {
            type: "rich_text";
            rich_text: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        } | {
            type: "people";
            people: z.objectOutputType<{
                id: z.ZodString;
                object: z.ZodLiteral<"user">;
            }, z.ZodTypeAny, "passthrough">[];
        } | {
            type: "relation";
            relation: {
                id: string;
            }[];
        })[];
    };
}, {
    type: "rollup";
    id: string;
    rollup: {
        number: number | null;
        function: string;
        type: "number";
    } | {
        function: string;
        type: "date";
        date: string | null;
    } | {
        function: string;
        type: "array";
        array: ({
            type: "title";
            title: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        } | {
            type: "rich_text";
            rich_text: ({
                type: "text";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                text: {
                    link: {
                        url: string;
                    } | null;
                    content: string;
                };
            } | {
                type: "mention";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                mention: {
                    type: "date" | "user" | "link_preview" | "template_mention" | "page" | "database";
                } & {
                    [k: string]: unknown;
                };
            } | {
                type: "equation";
                annotations: {
                    code: boolean;
                    color: string;
                    bold: boolean;
                    italic: boolean;
                    strikethrough: boolean;
                    underline: boolean;
                } & {
                    [k: string]: unknown;
                };
                plain_text: string;
                href: string | null;
                equation: {
                    expression: string;
                };
            })[];
        } | {
            type: "people";
            people: z.objectInputType<{
                id: z.ZodString;
                object: z.ZodLiteral<"user">;
            }, z.ZodTypeAny, "passthrough">[];
        } | {
            type: "relation";
            relation: {
                id: string;
            }[];
        })[];
    };
}>;
export declare const unique_id: z.ZodObject<{
    type: z.ZodLiteral<"unique_id">;
    id: z.ZodString;
} & {
    unique_id: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    type: "unique_id";
    id: string;
    unique_id?: any;
}, {
    type: "unique_id";
    id: string;
    unique_id?: any;
}>;
//# sourceMappingURL=raw-properties.d.ts.map