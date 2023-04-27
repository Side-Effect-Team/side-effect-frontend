import { useState, useRef } from "react";
import {
  SelectWrapper,
  SelectOption,
  SelectOptionWrapper,
  SelectValue,
} from "./styled";
import useOutsideClick from "../../hooks/useOutsideClick";
interface SelectBoxProps {
  data: {
    title: string;
    options: string[];
  };
}
export default function SelectBox({ data }: SelectBoxProps) {
  const { options, title } = data;
  const [isVisible, setIsVisible] = useState(false);
  const [selectValue, setSelectValue] = useState(title);
  const selectRef = useRef<HTMLDivElement>(null);

  useOutsideClick(selectRef, () => {
    setIsVisible(false);
  });
  const handleSelectVisible = () => {
    setIsVisible(!isVisible);
  };
  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLLIElement>) => {
    const { innerText } = e.target as HTMLLIElement;
    setSelectValue(innerText);
  };
  console.log(selectValue);
  return (
    <SelectWrapper onClick={handleSelectVisible} ref={selectRef}>
      <SelectValue>{selectValue}</SelectValue>
      <SelectOptionWrapper visible={isVisible}>
        {options &&
          options.map((option: string) => {
            return (
              <SelectOption key={option} onClick={handleOnChangeSelectValue}>
                {option}
              </SelectOption>
            );
          })}
      </SelectOptionWrapper>
    </SelectWrapper>
  );
}
