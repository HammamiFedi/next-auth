import * as zod from "zod";

export const LogionSchema = zod.object({
  email: zod.string().email({ message: "Email is required" }),
  password: zod.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = zod.object({
  email: zod.string().email({ message: "Email is required" }),
  password: zod.string().min(6, { message: "Minimum 6 characters required" }),
  name: zod.string().min(1, { message: "Name is required" }),
});
