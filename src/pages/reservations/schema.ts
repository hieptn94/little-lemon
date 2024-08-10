import { z } from "zod";

export const BookingInformationSchema = z.object({
  date: z.string().date(),
  time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Invalid time format. Expected HH:mm",
  }),
  numberOfGuests: z.number().min(1).max(8),
});

export const ContactInformationSchema = z.object({
  pronoun: z.union([z.literal("mr"), z.literal("mrs")]),
  name: z.string().min(5),
  phone: z.string().regex(/^[0-9]{3}[0-9]{3}[0-9]{4}$/, {
    message: "Invalid phone format. Example: 0123456789",
  }),
});

export type BookingInformation = z.infer<typeof BookingInformationSchema>;

export type ContactInformation = z.infer<typeof ContactInformationSchema>;
