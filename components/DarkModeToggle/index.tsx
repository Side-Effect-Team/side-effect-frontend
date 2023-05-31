import {
  DarkModeCircle,
  DarkModeCheck,
  DarkModeIcon,
  LightModeIcon,
} from "./styled";

import { useState } from "react";
export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDark(!isDark);
  };
  const handleDarkModeOnOff = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "dark");
    }
  };
  console.log("isDark", isDark);
  return (
    <>
      <DarkModeCheck
        id="darkmode"
        type="checkbox"
        onChange={handleDarkModeToggle}
        onClick={handleDarkModeOnOff}
      />
      <DarkModeCircle isDark={isDark} htmlFor="darkmode">
        <LightModeIcon className="icon" />
        <DarkModeIcon className="icon" />
      </DarkModeCircle>
    </>
  );
}
