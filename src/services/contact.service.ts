import type { ContactPayload } from "@/types/contact.types";

export async function submitContactMessage(payload: ContactPayload) {
  return {
    success: true,
    message: "Message received successfully.",
    data: payload,
  };
}
