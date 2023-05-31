import {
  DarkModeCircle,
  DarkModeCheck,
  DarkModeIcon,
  LightModeIcon,
} from "./styled";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import { useState } from "react";
export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDark(!isDark);
  };
  const handleDarkMode = () => {
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
        onClick={handleDarkMode}
      />
      <DarkModeCircle isDark={isDark} htmlFor="darkmode">
        <LightModeIcon  className="icon" />
        <DarkModeIcon  className="icon" />
      </DarkModeCircle>
    </>
  );
}
