import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export const DarkModeCheck = styled.input`
  outline: none;
  appearance: none;
`;
export const DarkModeCircle = styled.label<{ isDark: boolean }>`
  width: 80px;
  height: 30px;
  position: relative;
  display: block;
  background: ${theme.brandColor.lightGray};
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  &::after {
    content: "";
    width: 25px;
    height: 25px;
    position: absolute;
    top: 2px;
    left: ${(p) => (p.isDark ? "53px" : "3px")};
    background: ${(p) =>
      p.isDark
        ? "linear-gradient(180deg, #777, #3a3a3a)"
        : "linear-gradient(180deg, #ffcc89, #d8860b)"};
    border-radius: 180px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease;
  }
  .icon {
    fill: ${(p) => (p.isDark ? "#ffffff" : "#000000")};
    z-index: 10;
    position: absolute;
    top: 7px;
    transition: 0.3s ease;
  }
`;
export const IconSvg = styled.svg``;
export const LightModeIcon = styled(BsFillSunFill)`
  left: 7px;
`;
export const DarkModeIcon = styled(BsFillMoonStarsFill)`
  left: 57px;
`;
