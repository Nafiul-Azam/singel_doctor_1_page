import { env } from "@/lib/config/env";

export async function apiClient<T>(
  endpoint: string,
  init?: RequestInit,
): Promise<T> {
  const url = `${env.apiBaseUrl}${endpoint}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return (await response.json()) as T;
}
