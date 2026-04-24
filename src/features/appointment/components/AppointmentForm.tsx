"use client";

import { useMemo, useState } from "react";
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

  function handleSubmit(formData: FormData) {
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
}
