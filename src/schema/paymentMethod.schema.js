import { z } from "zod";

export const createPaymentMethodSchema = z
  .object({
    name: z.string().min(1, "Name is required"),

    type: z.preprocess(
      (val) => {
        if (val === "") return undefined;
        return val;
      },
      z.enum(["cash", "bank_transfer"], {
        required_error: "Payment method type is required",
        invalid_type_error: "Payment method type is required",
      })
    ),

    description: z.string().optional(),

    bank_logo: z.any().optional(),

    bank_name: z.string().optional(),
    account_number: z.string().optional(),
    account_holder: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type === "bank_transfer") {
      if (!data.bank_logo) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Bank logo is required for bank transfer",
          path: ["bank_logo"],
        });
      }

      if (!data.bank_name || data.bank_name.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Bank name is required for bank transfer",
          path: ["bank_name"],
        });
      }

      if (!data.account_number || data.account_number.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Account number is required for bank transfer",
          path: ["account_number"],
        });
      }

      if (!data.account_holder || data.account_holder.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Account holder is required for bank transfer",
          path: ["account_holder"],
        });
      }
    }
  });
