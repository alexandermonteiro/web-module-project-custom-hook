import { useState } from "react";

const userDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useState(initialValue);
  return [darkMode, setDarkMode];
};

export default userDarkMode;
