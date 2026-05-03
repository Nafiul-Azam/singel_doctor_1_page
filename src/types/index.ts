/**
 * Types Index
 * Central exports for all TypeScript types used in the application
 */

// API Response Types
export type { ApiResponse } from "./api.types";

// Feature Types
export type { Doctor } from "./doctor.types";
export type {
  AppointmentPayload,
  AppointmentTimeSlot,
} from "./appointment.types";
export type { ClinicService } from "./service.types";
export type { BlogPost } from "./blog.types";
export type { Review } from "./review.types";
export type { ContactPayload } from "./contact.types";

// Common Types
export type { SectionTitle, NavItem } from "./common.types";
