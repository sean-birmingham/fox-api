import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue) => {
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);
  const toggleMode = () => {
    setStoredValue(!storedValue);
  };
  useEffect(() => {
    storedValue
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [storedValue]);
  return [storedValue, setStoredValue, toggleMode];
};

export default useDarkMode;
