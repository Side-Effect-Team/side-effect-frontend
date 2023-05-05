import { useState } from "react";

export const useFilterTab = (index: number, name: string) => {
  const [currentTab, setCurrentTab] = useState(index);
  const [filter, setFilter] = useState(name);
  const handleFIlterTab: any = (index: number, name: string): void => {
    setCurrentTab(index);
    setFilter(name);
  };
  return [currentTab, filter, handleFIlterTab];
};
