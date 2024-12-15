import { useCallback } from 'react';

export const useDebounce = (callback, delay) => {
  let timeoutId;

  return useCallback((...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};