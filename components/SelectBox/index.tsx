import { useState, useEffect, useRef } from "react";
import {
  SelectWrapper,
  SelectOption,
  SelectOptionWrapper,
  SelectValue,
} from "./styled";

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

  const handleSelectVisible = () => {
    setIsVisible(!isVisible);
  };
  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLLIElement>) => {
    const { innerText } = e.target as HTMLLIElement;
    setSelectValue(innerText);
  };

  /**외부 클릭시 닫는 함수 커스텀훅으로 만들면 좋을거같음 */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
