import styled from "styled-components";

interface SelectOptionType {
  visible: boolean;
}

export const SelectWrapper = styled.div`
  width: 150px;
  cursor: pointer;
  font-weight: 500;
  margin-left: 50px;
  margin-top: 50px;
  position: relative;
`;
export const SelectOptionWrapper = styled.ul<SelectOptionType>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  gap: 5px;
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: white;
  border: 1px solid black;
  width: 150px;
`;
export const SelectOption = styled.li`
  color: ${({ theme }) => theme.colors.gray};
  &:hover {
    background-color: #eaecf0;
    color: black;
  }
  text-align: center;
  padding: 20px;
`;
export const SelectValue = styled.div`
  border: 1px solid black;
  text-align: center;
  padding: 10px;
`;
