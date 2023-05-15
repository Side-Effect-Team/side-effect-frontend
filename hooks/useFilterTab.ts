import { useState } from "react";

export const useFilterTab = (index: number, name: string) => {
  const [currentTab, setCurrentTab] = useState(index);
  const [value, setValue] = useState(name);
  const handleFilterTab: any = (index: number, name: string): void => {
    setCurrentTab(index);
    setValue(name);
  };

  return [currentTab, value, handleFilterTab];
};
