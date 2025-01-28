export declare const number: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"number">;
    id: import("zod").ZodString;
} & {
    number: import("zod").ZodNullable<import("zod").ZodNumber>;
}, "strip", import("zod").ZodTypeAny, {
    number: number | null;
    type: "number";
    id: string;
}, {
    number: number | null;
    type: "number";
    id: string;
}>, number | null, {
    number: number | null;
    type: "number";
    id: string;
}>;
export declare const url: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"url">;
    id: import("zod").ZodString;
} & {
    url: import("zod").ZodNullable<import("zod").ZodString>;
}, "strip", import("zod").ZodTypeAny, {
    type: "url";
    url: string | null;
    id: string;
}, {
    type: "url";
    url: string | null;
    id: string;
}>, string | null, {
    type: "url";
    url: string | null;
    id: string;
}>;
export declare const email: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"email">;
    id: import("zod").ZodString;
} & {
    email: import("zod").ZodNullable<import("zod").ZodString>;
}, "strip", import("zod").ZodTypeAny, {
    type: "email";
    id: string;
    email: string | null;
}, {
    type: "email";
    id: string;
    email: string | null;
}>, string | null, {
    type: "email";
    id: string;
    email: string | null;
}>;
export declare const phone_number: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"phone_number">;
    id: import("zod").ZodString;
} & {
    phone_number: import("zod").ZodNullable<import("zod").ZodString>;
}, "strip", import("zod").ZodTypeAny, {
    type: "phone_number";
    id: string;
    phone_number: string | null;
}, {
    type: "phone_number";
    id: string;
    phone_number: string | null;
}>, string | null, {
    type: "phone_number";
    id: string;
    phone_number: string | null;
}>;
export declare const checkbox: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"checkbox">;
    id: import("zod").ZodString;
} & {
    checkbox: import("zod").ZodBoolean;
}, "strip", import("zod").ZodTypeAny, {
    type: "checkbox";
    id: string;
    checkbox: boolean;
}, {
    type: "checkbox";
    id: string;
    checkbox: boolean;
}>, boolean, {
    type: "checkbox";
    id: string;
    checkbox: boolean;
}>;
export declare const select: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"select">;
    id: import("zod").ZodString;
} & {
    select: import("zod").ZodNullable<import("zod").ZodObject<{
        id: import("zod").ZodString;
        name: import("zod").ZodString;
        color: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        id: string;
        name: string;
        color: string;
    }, {
        id: string;
        name: string;
        color: string;
    }>>;
}, "strip", import("zod").ZodTypeAny, {
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
}>, string | null, {
    type: "select";
    id: string;
    select: {
        id: string;
        name: string;
        color: string;
    } | null;
}>;
export declare const multi_select: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"multi_select">;
    id: import("zod").ZodString;
} & {
    multi_select: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodString;
        name: import("zod").ZodString;
        color: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        id: string;
        name: string;
        color: string;
    }, {
        id: string;
        name: string;
        color: string;
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
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
}>, string[], {
    type: "multi_select";
    id: string;
    multi_select: {
        id: string;
        name: string;
        color: string;
    }[];
}>;
export declare const status: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"status">;
    id: import("zod").ZodString;
} & {
    status: import("zod").ZodNullable<import("zod").ZodObject<{
        id: import("zod").ZodString;
        name: import("zod").ZodString;
        color: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        id: string;
        name: string;
        color: string;
    }, {
        id: string;
        name: string;
        color: string;
    }>>;
}, "strip", import("zod").ZodTypeAny, {
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
}>, string | null, {
    type: "status";
    status: {
        id: string;
        name: string;
        color: string;
    } | null;
    id: string;
}>;
export declare const title: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"title">;
    id: import("zod").ZodString;
} & {
    title: import("zod").ZodArray<import("zod").ZodDiscriminatedUnion<"type", [import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        annotations: import("zod").ZodObject<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>;
        plain_text: import("zod").ZodString;
        href: import("zod").ZodNullable<import("zod").ZodString>;
    }, {
        type: import("zod").ZodLiteral<"text">;
        text: import("zod").ZodObject<{
            content: import("zod").ZodString;
            link: import("zod").ZodNullable<import("zod").ZodObject<{
                url: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                url: string;
            }, {
                url: string;
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
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
    }>, "strip", import("zod").ZodTypeAny, {
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
    }>, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        annotations: import("zod").ZodObject<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>;
        plain_text: import("zod").ZodString;
        href: import("zod").ZodNullable<import("zod").ZodString>;
    }, {
        type: import("zod").ZodLiteral<"mention">;
        mention: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            type: import("zod").ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            type: import("zod").ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, import("zod").ZodTypeAny, "passthrough">>;
    }>, "strip", import("zod").ZodTypeAny, {
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
    }>, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        annotations: import("zod").ZodObject<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>;
        plain_text: import("zod").ZodString;
        href: import("zod").ZodNullable<import("zod").ZodString>;
    }, {
        type: import("zod").ZodLiteral<"equation">;
        equation: import("zod").ZodObject<{
            expression: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            expression: string;
        }, {
            expression: string;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
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
}, "strip", import("zod").ZodTypeAny, {
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
}>, string, {
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
export declare const rich_text: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"rich_text">;
    id: import("zod").ZodString;
} & {
    rich_text: import("zod").ZodArray<import("zod").ZodDiscriminatedUnion<"type", [import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        annotations: import("zod").ZodObject<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>;
        plain_text: import("zod").ZodString;
        href: import("zod").ZodNullable<import("zod").ZodString>;
    }, {
        type: import("zod").ZodLiteral<"text">;
        text: import("zod").ZodObject<{
            content: import("zod").ZodString;
            link: import("zod").ZodNullable<import("zod").ZodObject<{
                url: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                url: string;
            }, {
                url: string;
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
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
    }>, "strip", import("zod").ZodTypeAny, {
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
    }>, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        annotations: import("zod").ZodObject<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>;
        plain_text: import("zod").ZodString;
        href: import("zod").ZodNullable<import("zod").ZodString>;
    }, {
        type: import("zod").ZodLiteral<"mention">;
        mention: import("zod").ZodObject<{
            type: import("zod").ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            type: import("zod").ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            type: import("zod").ZodEnum<["user", "date", "link_preview", "template_mention", "page", "database"]>;
        }, import("zod").ZodTypeAny, "passthrough">>;
    }>, "strip", import("zod").ZodTypeAny, {
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
    }>, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        annotations: import("zod").ZodObject<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
            bold: import("zod").ZodBoolean;
            italic: import("zod").ZodBoolean;
            strikethrough: import("zod").ZodBoolean;
            underline: import("zod").ZodBoolean;
            code: import("zod").ZodBoolean;
            color: import("zod").ZodString;
        }, import("zod").ZodTypeAny, "passthrough">>;
        plain_text: import("zod").ZodString;
        href: import("zod").ZodNullable<import("zod").ZodString>;
    }, {
        type: import("zod").ZodLiteral<"equation">;
        equation: import("zod").ZodObject<{
            expression: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            expression: string;
        }, {
            expression: string;
        }>;
    }>, "strip", import("zod").ZodTypeAny, {
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
}, "strip", import("zod").ZodTypeAny, {
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
}>, string, {
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
export declare const date: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"date">;
    id: import("zod").ZodString;
} & {
    date: import("zod").ZodNullable<import("zod").ZodObject<{
        start: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodString]>;
        end: import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodString]>>;
        time_zone: import("zod").ZodNullable<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        start: string;
        end: string | null;
        time_zone: string | null;
    }, {
        start: string;
        end: string | null;
        time_zone: string | null;
    }>>;
}, "strip", import("zod").ZodTypeAny, {
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
}>, {
    start: Date;
    end: Date | null;
    time_zone: string | null;
} | null, {
    type: "date";
    date: {
        start: string;
        end: string | null;
        time_zone: string | null;
    } | null;
    id: string;
}>;
export declare const created_time: import("zod").ZodEffects<import("zod").ZodObject<{
    type: import("zod").ZodLiteral<"created_time">;
    id: import("zod").ZodString;
} & {
    created_time: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    type: "created_time";
    id: string;
    created_time: string;
}, {
    type: "created_time";
    id: string;
    created_time: string;
}>, Date, {
    type: "created_time";
    id: string;
    created_time: string;
}>;
//# sourceMappingURL=transformed-properties.d.ts.map