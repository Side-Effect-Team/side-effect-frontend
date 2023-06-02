import styled from "styled-components";

export const PositionTabList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 20px 20px;
  overflow: auto;
  overflow-y: hidden;
`;
export const PositionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px;
  min-width: fit-content;
  cursor: pointer;
  &.focused {
    font-weight: bold;
    color: ${(p) => p.theme.textColor};
  }
`;
export const NumberOfPosition = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  color: ${(p) => p.theme.brandColor.lightGray};
  background-color: ${(p) => p.theme.brandColor.coral};
`;
