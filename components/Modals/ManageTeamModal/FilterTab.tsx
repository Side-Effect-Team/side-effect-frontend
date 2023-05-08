import styled from "styled-components";
import { theme } from "../../../styles/Theme";

interface FilterType {
  name: string;
}
interface PropsType {
  filterList: FilterType[];
  currentTab: number;
  handleFilterTab: Function;
}

export default function FilterTab({
  filterList,
  currentTab,
  handleFilterTab,
}: PropsType) {
  return (
    <FilterTabList>
      {filterList.map((tab, index) => {
        return (
          <FilterItem
            className={index === currentTab ? "focused" : ""}
            key={tab.name}
            onClick={() => handleFilterTab(index, tab.name)}
          >
            {tab.name}
          </FilterItem>
        );
      })}
    </FilterTabList>
  );
}
const FilterTabList = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 10px 20px;
`;
const FilterItem = styled.li`
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 500;
  &.focused {
    color: white;
    background-color: ${theme.brandColor.primary};
  }
`;
