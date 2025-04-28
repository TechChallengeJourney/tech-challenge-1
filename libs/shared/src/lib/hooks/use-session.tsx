'use client';

import { useState, useEffect } from "react";

const useSession = <T = unknown>(key: string) => {
    const [value, setValue] = useState<T | null>(null);

    useEffect(() => {
        const storedValue = sessionStorage.getItem(key);
        if (storedValue) {
            setValue(JSON.parse(storedValue));
        }
    }, [key]);

    const setSessionValue = (newValue: T) => {
        setValue(newValue);
        sessionStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setSessionValue];
};

export default useSession;