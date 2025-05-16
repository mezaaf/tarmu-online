import { z } from "zod";
import { emailSchema, passwordSchema } from "@/schemas/auth";

export const registerFormShema = z.object({
  email: emailSchema,
  password: passwordSchema,
  role: z.string().optional(),
});

export type RegisterFormSchema = z.infer<typeof registerFormShema>;
