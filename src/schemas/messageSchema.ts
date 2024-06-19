import z from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(1, { message: "content very short" })
    .max(300, { message: "content very long" }),
});
