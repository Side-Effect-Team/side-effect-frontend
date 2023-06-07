import styled from "styled-components";

export const PositionTabList = styled.ul`
  display: flex;
  margin: 0;
  overflow: auto;
  overflow-y: hidden;
  /* border-bottom: 1px solid black; */
  border-top: 1px solid black;
`;
export const PositionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: fit-content;
  height: 100%;
  padding: 20px 10px;
  cursor: pointer;
  &.focused {
    font-weight: bold;
    color: ${(p) => p.theme.textColor};
    border-bottom: 3px solid ${(p) => p.theme.colors.primary};
  }
`;
export const NumberOfPosition = styled.div<{ isExistApplicant: boolean }>`
  border-radius: 10px;
  padding: 5px 10px;
  color: ${(p) => p.theme.brandColor.lightGray};
  background-color: ${(p) =>
    p.isExistApplicant ? p.theme.brandColor.coral : p.theme.colors.darkGray};
`;
