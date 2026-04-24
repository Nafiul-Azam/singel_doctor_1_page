import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export type ContactSchemaInput = z.infer<typeof contactSchema>;
