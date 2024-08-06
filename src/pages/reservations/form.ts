import { z } from "zod";

export const BookingInformationFormSchema = z.object({
  date: z.string().date(),
  time: z.string().time(),
  numberOfGuests: z.number().min(1).max(8),
});

export const ContactInformationFormSchema = z.object({
  pronoun: z.union([z.literal("mr"), z.literal("mrs")]),
  name: z.string().min(5),
  phone: z.string(),
});

export const ReservationFormSchema = z.object({
  bookingInformation: BookingInformationFormSchema,
  contactInformation: ContactInformationFormSchema,
});

export type BookingInformationForm = z.infer<typeof BookingInformationFormSchema>;

export type ContactInformationForm = z.infer<typeof ContactInformationFormSchema>;

export type ReservationForm = z.infer<typeof ReservationFormSchema>;
