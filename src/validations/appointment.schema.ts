import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  doctorId: z.string().min(1, "Doctor is required"),
  appointmentDate: z.string().min(1, "Date is required"),
  timeSlot: z.string().min(1, "Time slot is required"),
  notes: z.string().max(500).optional(),
});

export type AppointmentSchemaInput = z.infer<typeof appointmentSchema>;
