import * as z from "zod";

const passwordSchema = z
  .string()
  .min(3, "Password must be at least 3 characters");

export const loginSchema = z.object({
  email: z.email().min(1, "Email is required"),
  password: passwordSchema,
});

export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  password: passwordSchema,
  // cpassword: z.string().min(3, "Confirm password is required"),
  name: z.string().min(3, "Name is required"),
  phone: z.string().min(12, "Phone number must be at least 12 characters"),
  gender: z.enum(["MALE", "FEMALE"], {
    errorMap: () => ({ message: "Select gender" }),
  }),
  birthDate: z.string().min(1, "Date of birth is required"),
  profile_url: z.any().nullable(),
});
