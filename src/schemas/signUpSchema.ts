import z from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username very short")
  .max(20, "username very long")
  .regex(/^[a-zA-Z0-9_]+$/, "Invalid username");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Invalid password" }),
});
