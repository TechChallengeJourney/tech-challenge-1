'use client';

import { useState, useEffect } from 'react';

export function useLocalStorageState<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        try {
          setValue(JSON.parse(storedValue));
        } catch (e) {
          console.warn('Erro ao fazer parse do localStorage:', e);
        }
      }
    }
  }, [key]);

  const setAndStoreValue = (newValue: T) => {
    setValue(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  return [value, setAndStoreValue] as const;
}
