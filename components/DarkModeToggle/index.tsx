import {
  DarkModeCircle,
  DarkModeCheck,
  DarkModeIcon,
  LightModeIcon,
} from "./styled";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { handleDarkMode } from "@/store/darkModeSlice";
export default function DarkModeToggle() {
  const { isDark } = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();
  const handleDarkModeToggle = () => {
    dispatch(handleDarkMode());
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
