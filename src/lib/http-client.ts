/**
 * HTTP Request Helper
 * Centralized utility for making API requests
 * Handles errors, timeouts, and response parsing automatically
 */

import { ApiResponseHandler, API_CONFIG } from "@/lib/api-response-handler";
import { ERROR_MESSAGES } from "@/lib/backend-integration-guide";
import type { ApiResponse } from "@/types/api.types";

export interface RequestOptions extends RequestInit {
  timeout?: number;
}

/**
 * Make HTTP request with automatic error handling
 */
export async function httpRequest<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<ApiResponse<T>> {
  const { timeout = API_CONFIG.TIMEOUT, ...fetchOptions } = options;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const url = new URL(endpoint, API_CONFIG.BASE_URL).toString();

    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        ...API_CONFIG.HEADERS,
        ...fetchOptions.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || ERROR_MESSAGES.SERVER_ERROR);
    }

    const data = await response.json();
    return ApiResponseHandler.parse<T>(data);
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(ERROR_MESSAGES.TIMEOUT);
    }

    if (error instanceof TypeError) {
      throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
    }

    throw error;
  }
}

/**
 * GET request helper
 */
export async function httpGet<T>(endpoint: string): Promise<ApiResponse<T>> {
  return httpRequest<T>(endpoint, {
    method: "GET",
  });
}

/**
 * POST request helper
 */
export async function httpPost<T>(
  endpoint: string,
  data: unknown,
): Promise<ApiResponse<T>> {
  return httpRequest<T>(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

/**
 * PUT request helper
 */
export async function httpPut<T>(
  endpoint: string,
  data: unknown,
): Promise<ApiResponse<T>> {
  return httpRequest<T>(endpoint, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

/**
 * DELETE request helper
 */
export async function httpDelete<T>(endpoint: string): Promise<ApiResponse<T>> {
  return httpRequest<T>(endpoint, {
    method: "DELETE",
  });
}

/**
 * PATCH request helper
 */
export async function httpPatch<T>(
  endpoint: string,
  data: unknown,
): Promise<ApiResponse<T>> {
  return httpRequest<T>(endpoint, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}
