"use client";

import { useMemo, useState, type FormEvent } from "react";
import { FormField } from "@/components/forms/FormField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import type { Doctor } from "@/types/doctor.types";
import type { AppointmentTimeSlot } from "@/types/appointment.types";
import { appointmentSchema } from "@/validations/appointment.schema";

type AppointmentFormProps = {
  doctors: Doctor[];
  slots: AppointmentTimeSlot[];
};

export function AppointmentForm({ doctors, slots }: AppointmentFormProps) {
  const [message, setMessage] = useState("");
  const doctorOptions = useMemo(
    () => doctors.map((item) => ({ value: item.id, label: item.name })),
    [doctors],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      doctorId: String(formData.get("doctorId") ?? ""),
      appointmentDate: String(formData.get("appointmentDate") ?? ""),
      timeSlot: String(formData.get("timeSlot") ?? ""),
      notes: String(formData.get("notes") ?? ""),
    };

    const parsed = appointmentSchema.safeParse(payload);

    if (!parsed.success) {
      setMessage(parsed.error.issues[0]?.message ?? "Validation failed");
      return;
    }

    setMessage(
      "Appointment request captured. Connect this action with backend API next.",
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Book Appointment</h2>

      <p className="mt-2 text-sm text-slate-500">
        Select doctor, date, and available time slot.
      </p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <FormField label="Full name" htmlFor="fullName">
          <Input id="fullName" name="fullName" autoComplete="name" />
        </FormField>

        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Phone" htmlFor="phone">
            <Input id="phone" name="phone" type="tel" autoComplete="tel" />
          </FormField>

          <FormField label="Email" htmlFor="email">
            <Input id="email" name="email" type="email" autoComplete="email" />
          </FormField>
        </div>

        <FormField label="Doctor" htmlFor="doctorId">
          <Select id="doctorId" name="doctorId">
            <option value="">Select doctor</option>
            {doctorOptions.map((doctor) => (
              <option key={doctor.value} value={doctor.value}>
                {doctor.label}
              </option>
            ))}
          </Select>
        </FormField>

        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Appointment date" htmlFor="appointmentDate">
            <Input id="appointmentDate" name="appointmentDate" type="date" />
          </FormField>

          <FormField label="Time slot" htmlFor="timeSlot">
            <Select id="timeSlot" name="timeSlot">
              <option value="">Select slot</option>
              {slots.map((slot) => (
                <option key={slot.id} value={slot.id}>
                  {slot.label}
                </option>
              ))}
            </Select>
          </FormField>
        </div>

        <FormField label="Notes" htmlFor="notes">
          <Textarea id="notes" name="notes" rows={4} />
        </FormField>

        {message ? (
          <p className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700">
            {message}
          </p>
        ) : null}

        <SubmitButton label="Confirm Appointment" />
      </form>
    </div>
  );
}
