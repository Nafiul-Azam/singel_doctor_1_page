/**
 * Backend Integration Guide
 *
 * This file documents how to integrate the backend easily
 * Follow these patterns for consistent API integration
 */

// ============================================================
// 1. API ENDPOINTS STRUCTURE
// ============================================================

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REGISTER: "/auth/register",
    VERIFY: "/auth/verify",
  },

  // Doctors
  DOCTORS: {
    LIST: "/doctors",
    GET: (id: string) => `/doctors/${id}`,
    CREATE: "/doctors",
    UPDATE: (id: string) => `/doctors/${id}`,
    DELETE: (id: string) => `/doctors/${id}`,
    SEARCH: "/doctors/search",
  },

  // Appointments
  APPOINTMENTS: {
    LIST: "/appointments",
    GET: (id: string) => `/appointments/${id}`,
    CREATE: "/appointments",
    UPDATE: (id: string) => `/appointments/${id}`,
    CANCEL: (id: string) => `/appointments/${id}/cancel`,
    AVAILABLE_SLOTS: "/appointments/slots/available",
  },

  // Services
  SERVICES: {
    LIST: "/services",
    GET: (id: string) => `/services/${id}`,
    CREATE: "/services",
    UPDATE: (id: string) => `/services/${id}`,
    DELETE: (id: string) => `/services/${id}`,
  },

  // Blog
  BLOG: {
    LIST: "/blog",
    GET: (slug: string) => `/blog/${slug}`,
    CREATE: "/blog",
    UPDATE: (id: string) => `/blog/${id}`,
    DELETE: (id: string) => `/blog/${id}`,
    SEARCH: "/blog/search",
  },

  // Reviews
  REVIEWS: {
    LIST: "/reviews",
    CREATE: "/reviews",
    UPDATE: (id: string) => `/reviews/${id}`,
    DELETE: (id: string) => `/reviews/${id}`,
  },

  // Contact
  CONTACT: {
    SUBMIT: "/contact",
  },

  // Health Check
  HEALTH: "/health",
} as const;

// ============================================================
// 2. QUERY PARAMETERS CONSTANTS
// ============================================================

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

export const SORT_OPTIONS = {
  NEWEST: "newest",
  OLDEST: "oldest",
  TRENDING: "trending",
  RATING: "rating",
  POPULAR: "popular",
} as const;

// ============================================================
// 3. ERROR HANDLING
// ============================================================

export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network connection failed. Please try again.",
  SERVER_ERROR: "Server error occurred. Please try again later.",
  VALIDATION_ERROR: "Please check the form and try again.",
  NOT_FOUND: "The requested resource was not found.",
  UNAUTHORIZED: "You need to be logged in.",
  FORBIDDEN: "You don't have permission to perform this action.",
  TIMEOUT: "Request timed out. Please try again.",
} as const;

// ============================================================
// 4. SUCCESS MESSAGES
// ============================================================

export const SUCCESS_MESSAGES = {
  APPOINTMENT_BOOKED: "Appointment booked successfully!",
  APPOINTMENT_CANCELLED: "Appointment cancelled successfully!",
  REVIEW_SUBMITTED: "Thank you for your review!",
  MESSAGE_SENT: "Your message has been sent successfully!",
  PROFILE_UPDATED: "Profile updated successfully!",
} as const;
