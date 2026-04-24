export async function serverClient<T>(
  endpoint: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(endpoint, { ...init, cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Server request failed: ${response.status}`);
  }

  return (await response.json()) as T;
}
