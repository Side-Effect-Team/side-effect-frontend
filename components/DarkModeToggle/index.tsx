import {
  DarkModeCircle,
  DarkModeCheck,
  DarkModeIcon,
  LightModeIcon,
} from "./styled";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { handleDarkMode } from "@/store/darkModeSlice";
import { BiSun, BiMoon } from "react-icons/bi";
export default function DarkModeToggle() {
  const { isDark } = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();
  const handleDarkModeToggle = () => {
    dispatch(handleDarkMode({ isDark: !isDark }));
  };

  return (
    <>
      <DarkModeCheck
        id="darkmode"
        type="checkbox"
        onChange={handleDarkModeToggle}
      />
      <DarkModeCircle isDark={isDark} htmlFor="darkmode">
        <LightModeIcon className="icon" isDark={isDark}>
          <BiSun size={20} />
        </LightModeIcon>
        <DarkModeIcon className="icon" isDark={isDark}>
          <BiMoon size={20} />
        </DarkModeIcon>
      </DarkModeCircle>
    </>
  );
}
