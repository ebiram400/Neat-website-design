import { z } from "zod";

export const LoginFieldsSchema = z.object({
  username: z.string().min(1, "نام کاربری نباید خالی باشد"),
  password: z.string().min(1, "رمز عبور نباید خالی باشد"),
});

export type LoginFieldsData = z.infer<typeof LoginFieldsSchema>;
