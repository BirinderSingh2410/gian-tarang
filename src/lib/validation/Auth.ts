import z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().regex(/^[A-Za-z\d]{8,20}$/, {
    message:
      "Password must be 8-20 characters long and contain only uppercase, lowercase letters, and numbers.",
  }),
});

export const SignupSchema = z
  .object({
    fullName: z.string().min(2, { message: "full name is too short" }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().regex(/^[A-Za-z\d]{8,20}$/, {
      message:
        "Password must be 8-20 characters long and contain only uppercase, lowercase letters, and numbers.",
    }),
    confirmPassword: z.string(),
    role: z.enum(["admin", "teacher", "student", "other"]),
    mobileNumber: z
      .string()
      .regex(/^\d{10}$/, { message: 'Mobile number must be exactly 10 digits' }),
    gender: z.enum(["m", "f"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });
