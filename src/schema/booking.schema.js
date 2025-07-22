import { z } from "zod";

export const createBookingSchema = z.object({
  booking_date: z.string().min(1, "Booking date is required"),
  booking_time: z
    .string()
    .min(1, "Booking time is required")
    .regex(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Invalid time format (expected HH:mm)"
    ),
  bring_ladder: z
    .string({
      required_error: "Bring ladder is required",
    })
    .default("false"),
  payment_method_id: z.string().min(1, "Payment method is required"),
});

export const uploadPaymentProof = z.object({
  payment_proof: z
    .any()
    .refine((file) => file instanceof File, {
      message: "File is required",
    })
    .refine((file) => file && file.size <= 3 * 1024 * 1024, {
      message: "Max file size is 3MB",
    }),
});
