import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const userDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
  return [darkMode, setDarkMode];
};

export default userDarkMode;
