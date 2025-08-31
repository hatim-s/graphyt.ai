import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

export function useEventCallback<T extends (...args: unknown[]) => unknown>(
  fn: T
): T {
  const effect = typeof window === "undefined" ? useLayoutEffect : useEffect;

  const ref = useRef<T>(fn);

  effect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback<T>(
    ((...args: Parameters<T>) => {
      return ref.current(...args) as ReturnType<T>;
    }) as T, // type casting to fix the return type of the callback
    []
  );
}
