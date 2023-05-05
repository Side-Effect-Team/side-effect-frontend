import { useState, useEffect } from "react";
interface FilterPropsType {
  index: number;
  name: any;
}
export const useFilterTab = ({ index, name }: FilterPropsType) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [filter, setFilter] = useState();
  useEffect(() => {
    setCurrentTab(index);
    setFilter(name);
  }, []);
  return { currentTab, filter };
};
