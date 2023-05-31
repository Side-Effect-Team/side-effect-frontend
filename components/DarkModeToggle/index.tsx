import {
  DarkModeCircle,
  DarkModeCheck,
  DarkModeIcon,
  LightModeIcon,
} from "./styled";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { handleDarkMode } from "@/store/darkModeSlice";
import { useEffect } from "react";
export default function DarkModeToggle() {
  const { isDark } = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();
  const handleDarkModeToggle = () => {
    dispatch(handleDarkMode({ isDark: !isDark }));
  };
  const handleDarkModeOnOff = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "dark");
    }
  };
  //브라우저껏다가 다시 킬떄 끄기전 적용했던 다크모드를 적용
  useEffect(() => {
    if (isDark) {
      dispatch(handleDarkMode({ isDark: true }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
