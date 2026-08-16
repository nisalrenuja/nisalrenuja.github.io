"use client";

import { useCallback, useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Hook to detect if the user prefers reduced motion.
 *
 * `matchMedia` is an external store, so it is read through
 * `useSyncExternalStore` rather than an effect that calls `setState` on mount:
 * that pattern renders once with the wrong value and then immediately re-renders
 * (and trips react-hooks/set-state-in-effect). The server snapshot is `false`,
 * matching what a non-browser render can know.
 *
 * @returns boolean indicating if reduced motion is preferred
 */
export function useReducedMotion(): boolean {
  const subscribe = useCallback((onChange: () => void) => {
    const mq = window.matchMedia(QUERY);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  );
}
