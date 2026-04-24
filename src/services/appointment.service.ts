import { scheduleMockData } from "@/data/mock/schedule.mock";
import type { AppointmentPayload } from "@/types/appointment.types";

export async function getAvailableSlots() {
  return scheduleMockData;
}

export async function createAppointment(payload: AppointmentPayload) {
  return {
    success: true,
    message: "Appointment request submitted.",
    data: payload,
  };
}
