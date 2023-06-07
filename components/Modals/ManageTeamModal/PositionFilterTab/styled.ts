import styled from "styled-components";

export const PositionTabList = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0px 20px;
  overflow: auto;
  overflow-y: hidden;
  border-top: 2px solid ${(p) => p.theme.colors.darkGray};
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
    border-bottom: 4px solid ${(p) => p.theme.colors.primary};
  }
`;
export const NumberOfPosition = styled.div<{ isExistApplicant: boolean }>`
  border-radius: 10px;
  padding: 5px 10px;
  color: ${(p) => p.theme.brandColor.lightGray};
  background-color: ${(p) =>
    p.isExistApplicant ? p.theme.brandColor.coral : "#35383F"};
`;
