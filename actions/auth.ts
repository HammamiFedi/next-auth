"use server";

import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { LogionSchema, RegisterSchema } from "@/schemas";
import { LogionSchemaType, RegisterSchemaType } from "@/types";
import { getUserByEmail } from "@/lib/server-utils";

export const login = async (values: LogionSchemaType) => {
  const validatedFields = LogionSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  return { success: "Email has been sent." };
};

export const register = async (values: RegisterSchemaType) => {
  // Validate fields
  const validatedFields = RegisterSchema.safeParse(values);

  // Return error if fields are invalid
  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  // Destructure validated fields
  const { email, password, name } = validatedFields.data;

  // Check if user already exists
  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Email already in use." };

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  try {
    await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return { error: "Failed to create user." };
  }

  // TODO: Send Email Verification Token

  return { success: "User created." };
};
