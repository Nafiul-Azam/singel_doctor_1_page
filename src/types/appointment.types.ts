export interface AppointmentPayload {
  fullName: string;
  phone: string;
  email?: string;
  doctorId: string;
  appointmentDate: string;
  timeSlot: string;
  notes?: string;
}

export interface AppointmentTimeSlot {
  id: string;
  label: string;
}
