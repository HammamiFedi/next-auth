import NextAuth, { type DefaultSession } from "next-auth";

type ExtendedUser = {
  role: "ADMIN" | "USER";
} & DefaultSession["user"];

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role?: "ADMIN" | "USER";
  }
}
