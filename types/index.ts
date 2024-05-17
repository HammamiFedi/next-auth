import { LogionSchema } from "@/schemas";
import * as zod from "zod";

export type LogionSchemaType = zod.infer<typeof LogionSchema>;
