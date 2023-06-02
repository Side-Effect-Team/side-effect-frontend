import styled from "styled-components";
import { theme } from "@/styles/Theme";

export const FilterTabList = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 10px 20px;
  background-color: ${(p) => p.theme.componentBgColor};
`;
export const FilterItem = styled.li`
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 500;
  &.focused {
    color: white;
    background-color: ${theme.brandColor.primary};
  }
`;
