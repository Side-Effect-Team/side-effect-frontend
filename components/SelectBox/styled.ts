import styled, { css } from "styled-components";

interface SelectOptionType {
  visible: boolean;
}
interface SelectSize {
  size?: "small" | "medium" | "large";
}
const sizeStyles = css<SelectSize>`
  ${(props) =>
    props.size === "small" &&
    css`
      width: 100px;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      width: 150px;
    `}
    ${(props) =>
    props.size === "large" &&
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
`;

export const SelectOptionWrapper = styled.ul<SelectOptionType>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  gap: 5px;
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
  width: 100%;
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
  size: "medium",
};
