import { FilterTabList, FilterItem } from "./styled";
interface FilterType {
  name: string;
  value: string;
}
interface PropsType {
  filterList: FilterType[];
  currentTabIndex: number;
  handleFilterTab: Function;
}

export default function FilterTab({
  filterList,
  currentTabIndex,
  handleFilterTab,
}: PropsType) {
  return (
    <FilterTabList>
      {filterList.map((tab, index) => {
        return (
          <FilterItem
            className={index === currentTabIndex ? "focused" : ""}
            key={tab.name}
            onClick={() => {
              handleFilterTab(index, tab.value);
            }}
          >
            {tab.name}
          </FilterItem>
        );
      })}
    </FilterTabList>
  );
}
