"use server";

import { LogionSchema, RegisterSchema } from "@/schemas";
import { LogionSchemaType, RegisterSchemaType } from "@/types";

export const login = async (values: LogionSchemaType) => {
  const validatedFields = LogionSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  return { success: "Email has been sent." };
};

export const register = async (values: RegisterSchemaType) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  return { success: "Email has been sent." };
};
