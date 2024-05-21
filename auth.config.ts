import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LogionSchema } from "@/schemas";
import { getUserByEmail } from "@/lib/server-utils";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        // Validate the fields
        const validatedFields = LogionSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          // Get the user from the database
          const user = await getUserByEmail(email);

          // If the user doesn't exist or the password is missing, return null
          // Password may be missing if the user signed up with a social provider (Google, Github, etc.)
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
