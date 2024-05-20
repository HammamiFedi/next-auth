"use server";

import { LogionSchema } from "@/schemas";
import { LogionSchemaType } from "@/types";

export const login = async (values: LogionSchemaType) => {
  const validatedFields = LogionSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  return { success: "Email has been sent." };
};
