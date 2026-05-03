/**
 * API Response Handler
 * Centralized utility for handling all API responses
 * Makes backend integration seamless and consistent
 */

import { ApiResponse } from "@/types/api.types";

export class ApiResponseHandler {
  /**
   * Parse and validate API response
   * @param response - Raw response data
   * @returns Parsed ApiResponse
   */
  static parse<T>(response: unknown): ApiResponse<T> {
    if (!response || typeof response !== "object") {
      throw new Error("Invalid response format");
    }

    const data = response as ApiResponse<T>;

    if (typeof data.success !== "boolean") {
      throw new Error("Missing success field in response");
    }

    return data;
  }

  /**
   * Check if response is successful
   */
  static isSuccess<T>(response: ApiResponse<T>): boolean {
    return response.success === true && response.data !== null;
  }

  /**
   * Get error message from response
   */
  static getErrorMessage<T>(response: ApiResponse<T>): string {
    return response.message || "An error occurred";
  }

  /**
   * Extract data from response
   */
  static getData<T>(response: ApiResponse<T>): T | null {
    return response.success ? response.data : null;
  }
}

/**
 * Fetch configuration for all API calls
 */
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  TIMEOUT: 30000,
  HEADERS: {
    "Content-Type": "application/json",
  },
} as const;
