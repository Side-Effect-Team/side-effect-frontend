import styled, { css } from "styled-components";

interface SelectOptionType {
  visible: boolean;
}
interface SelectSize {
  size?: "small" | "medium" | "large" | "full";
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
    ${(p) =>
    p.size === "full" &&
    css`
      width: 100%;
    `}
`;

export const SelectWrapper = styled.div`
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  position: relative;
  ${sizeStyles}
`;

export const SelectOptionWrapper = styled.ul<SelectOptionType>`
  visibility: ${(p) => (p.visible ? "visible" : "hidden")};
  opacity: ${(p) => (p.visible ? "1" : "0")};
  transition: 0.2s ease-in-out;
  transform: ${(p) => (p.visible ? "translateY(0%)" : "translateY(-25%)")};
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
  width: 100%;
  z-index: 10;
`;
export const SelectOption = styled.li`
  border-radius: 5px;
  &:hover {
    background-color: #eaecf0;
    color: black;
  }
  text-align: center;
  padding: 10px 20px;
`;
export const SelectValue = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 10px;
`;
SelectWrapper.defaultProps = {
  size: "full",
};
