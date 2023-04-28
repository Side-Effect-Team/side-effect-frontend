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
export default function SelectBox({ options, setValue, value, title }: any) {
  const [isVisible, setIsVisible] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useOutsideClick(selectRef, () => {
    setIsVisible(false);
  });
  const handleSelectVisible = () => {
    setIsVisible(!isVisible);
  };
  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLLIElement>) => {
    const { innerText } = e.target as HTMLLIElement;
    setValue(innerText);
  };
  return (
    <SelectWrapper onClick={handleSelectVisible} ref={selectRef}>
      <SelectValue>{value ? value : title}</SelectValue>
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
