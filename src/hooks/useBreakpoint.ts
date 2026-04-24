"use client";

import { useCallback, useSyncExternalStore } from "react";

export function useBreakpoint(query = "(min-width: 768px)") {
  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  }, [query]);

  const subscribe = useCallback(
    (listener: () => void) => {
      if (typeof window === "undefined") return () => {};

      const media = window.matchMedia(query);
      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    },
    [query],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
