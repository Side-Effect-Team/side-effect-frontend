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
        <LightModeIcon className="icon" />
        <DarkModeIcon className="icon" />
      </DarkModeCircle>
    </>
  );
}
