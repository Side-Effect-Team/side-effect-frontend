import styled, { css } from "styled-components";
import { media } from "@/styles/mediatest";
interface SelectOptionType {
  visible: boolean;
}
interface SelectSize {
  size?: "small" | "medium" | "large";
}
const sizeStyles = css<SelectSize>`
  ${(p) =>
    p.size === "small" &&
    css`
      width: 100px;
    `}
  ${(p) =>
    p.size === "medium" &&
    css`
      width: 150px;
    `}
    ${(p) =>
    p.size === "large" &&
    css`
      width: 200px;
    `}
`;

export const SelectWrapper = styled.div`
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  position: relative;
  ${sizeStyles}
  ${media.mobile} {
    width: 100%;
  }
`;
export const SelectOptionWrapper = styled.ul<SelectOptionType>`
  visibility: ${(p) => (p.visible ? "visible" : "hidden")};
  opacity: ${(p) => (p.visible ? "1" : "0")};
  transform: ${(p) => (p.visible ? "translateY(0%)" : "translateY(-20%)")};
  transition: 0.2s ease-in-out;
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
  width: 100%;
  z-index: 10;
  margin-top: 0.5rem;
  max-height: 300px;
  overflow: auto;
`;
export const SelectOption = styled.li`
  border-radius: 5px;
  text-align: center;
  padding: 20px 20px;
  &:hover {
    background-color: #eaecf0;
    color: black;
  }
`;
export const SelectValue = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
`;
SelectWrapper.defaultProps = {
  size: "large",
};
