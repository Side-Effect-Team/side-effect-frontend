import styled from "styled-components";
import { BiSun, BiMoon } from "react-icons/bi";
export const DarkModeCheck = styled.input`
  outline: none;
  appearance: none;
`;
export const DarkModeCircle = styled.label<{ isDark: boolean }>`
  width: 80px;
  height: 35px;
  position: relative;
  display: block;
  justify-content: center;
  border-radius: 200px;
  background: ${(p) => (p.isDark ? "black" : "white")};
  border: 1px solid ${(p) => p.theme.cardBorder};
  cursor: pointer;
  &::after {
    content: "";
    width: 25px;
    height: 25px;
    position: absolute;
    top: 4px;
    left: ${(p) => (p.isDark ? "53px" : "3px")};
    background-color: ${(p) => (p.isDark ? "white" : "black")};
    border-radius: 200px;
    transition: 0.3s ease;
  }
  .icon {
    z-index: 10;
    position: absolute;
    top: 7px;
    transition: 0.3s ease;
  }
`;
export const LightModeIcon = styled(BiSun)<{ isDark: boolean }>`
  left: 5px;
  fill: ${(p) => (p.isDark ? "gray" : "white")};
`;
export const DarkModeIcon = styled(BiMoon)<{ isDark: boolean }>`
  left: 56px;
  fill: ${(p) => (p.isDark ? "black" : "gray")};
`;
