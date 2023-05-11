import React, { useState, useRef } from "react";
import {
  SelectWrapper,
  SelectOption,
  SelectOptionWrapper,
  SelectValue,
} from "./styled";
import useOutsideClick from "../../hooks/useOutsideClick";

interface OptionsType {
  name: string;
  value: string | number;
}
interface SelectBoxProps {
  options: OptionsType[];
  setValue: React.Dispatch<React.SetStateAction<any>>;
  title: string | number;
  size?: "small" | "medium" | "large";
}

function SelectBox({ options, setValue, title, size }: SelectBoxProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState(title);
  const selectRef = useRef<HTMLDivElement>(null);
  useOutsideClick(selectRef, () => {
    setIsVisible(false);
  });
  const handleSelectVisible = () => {
    setIsVisible(!isVisible);
  };
  const handleOnChangeSelectValue = <T extends string | number>(
    value: T,
    name: T,
  ): void => {
    setValue(value);
    setName(name);
  };

  return (
    <SelectWrapper onClick={handleSelectVisible} ref={selectRef} size={size}>
      <SelectValue>{name ? name : title}</SelectValue>
      <SelectOptionWrapper visible={isVisible}>
        {options &&
          options.map((option) => {
            return (
              <SelectOption
                key={option.name}
                onClick={() =>
                  handleOnChangeSelectValue(option.value, option.name)
                }
              >
                {option.name}
              </SelectOption>
            );
          })}
      </SelectOptionWrapper>
    </SelectWrapper>
  );
}
export default React.memo(SelectBox);

//SelectBox 컴포넌트의 사용법은 부모컴포넌트로부터 4개의 props 를 받아야합니다.
//options 객체기 필요합니다. 객체의 양식은 {name"abcd",value:"abcd"}이며  name은 화면에 보여질 값 value 는 백엔드에 보낼 값입니다.
//이 컴포넌트를 사용하는 페이지에서 useState를 사용하여 값을 관리해주시면 됩니다.
