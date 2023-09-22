// React hooks for managing state and side-effects
import { useEffect, useState } from "react";

// Declare useLocalStorage with generic type param T
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {

  // Initialize local state with useState
  const [value, setValue] = useState<T>(() => {

    // Retrieve item from localStorage
    const jsonValue = localStorage.getItem(key);
    // Check if item exists in localStorage
    if (jsonValue == null) {

      // If initialValue is function, call function to get the actual value
      // Otherwise, use initialValue as is
      if (typeof initialValue === "function") {
        return (initialValue as () => T)();
      } else {
        return initialValue;
      }
    } else {
      // If the item exists in localStorage, parse JSON value
      return JSON.parse(jsonValue);
    }
  });

  // useEffect to set the localStorage whenever the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  // Return the current value and the function to update it
  return [value, setValue] as [T, typeof setValue];
}
