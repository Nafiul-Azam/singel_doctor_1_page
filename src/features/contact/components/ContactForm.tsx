"use client";

import { useState } from "react";
import { FormField } from "@/components/forms/FormField";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { contactSchema } from "@/validations/contact.schema";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(formData: FormData) {
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      setMessage(parsed.error.issues[0]?.message ?? "Validation failed");
      return;
    }

    setMessage(
      "Message saved. Connect this flow to contact API endpoint next.",
    );
  }

  return (
    <form
      action={handleSubmit}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-5"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Name" htmlFor="name">
          <Input id="name" name="name" placeholder="Your name" />
        </FormField>
        <FormField label="Phone" htmlFor="phone">
          <Input id="phone" name="phone" placeholder="01XXXXXXXXX" />
        </FormField>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Email (optional)" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </FormField>
        <FormField label="Subject" htmlFor="subject">
          <Input
            id="subject"
            name="subject"
            placeholder="What is this about?"
          />
        </FormField>
      </div>
      <FormField label="Message" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Type your message"
        />
      </FormField>

      <SubmitButton label="Send Message" />
      {message ? <p className="text-sm text-slate-700">{message}</p> : null}
    </form>
  );
}
