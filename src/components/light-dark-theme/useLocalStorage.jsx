import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(key, defautlValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defautlValue));
    } catch (err) {
      console.log(err);
      currentValue = defautlValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
