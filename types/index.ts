import * as zod from "zod";

import { LogionSchema, RegisterSchema } from "@/schemas";

export type LogionSchemaType = zod.infer<typeof LogionSchema>;

export type RegisterSchemaType = zod.infer<typeof RegisterSchema>;
