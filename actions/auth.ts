"use server";

import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

import { db } from "@/lib/db";
import { LogionSchema, RegisterSchema } from "@/schemas";
import { LogionSchemaType, RegisterSchemaType } from "@/types";
import { getUserByEmail } from "@/lib/server-utils";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/config/constants/routes";

export const login = async (values: LogionSchemaType) => {
  const validatedFields = LogionSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials." };
        default:
          return { error: "Something went wrong." };
      }
    }

    // Next.js "redirects" throw an error, so we need to throw it again
    // Throw the error back to redirect you in case of successful login
    throw error;
  }
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
