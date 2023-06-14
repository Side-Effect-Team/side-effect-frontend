import styled from "styled-components";
interface SelectOptionType {
  visible: boolean;
}

export const SelectWrapper = styled.div`
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  position: relative;
  width: 100%;
  flex: 5;
`;
export const SelectOptionWrapper = styled.ul<SelectOptionType>`
  visibility: ${(p) => (p.visible ? "visible" : "hidden")};
  opacity: ${(p) => (p.visible ? "1" : "0")};
  transform: ${(p) => (p.visible ? "translateY(0%)" : "translateY(-20%)")};
  transition: 0.2s ease-in-out;
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: ${(p) => p.theme.componentBgColor};
  border: 2px solid ${(p) => p.theme.cardBorder};

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
    background-color: ${(p) => p.theme.hover};
    color: ${(p) => p.theme.textColor};
  }
`;
export const SelectValue = styled.div`
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  background-color: ${(p) => p.theme.componentBgColor};
  border: 2px solid ${(p) => p.theme.cardBorder};
`;
