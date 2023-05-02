import React, { useState, useRef } from "react";
import {
  SelectWrapper,
  SelectOption,
  SelectOptionWrapper,
  SelectValue,
} from "./styled";
import useOutsideClick from "../../hooks/useOutsideClick";

interface SelectBoxProps {
  options: Array<string | number>;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  value: string | number;
  title?: string | number;
  size?: "small" | "medium" | "large";
}

export default function SelectBox({
  options,
  setValue,
  value,
  title,
  size,
}: SelectBoxProps) {
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
    for (let i = 0; i < options.length; i++) {
      if (typeof options[i] === "number") {
        setValue(Number(innerText));
      } else {
        setValue(innerText);
      }
    }
  };
  return (
    <SelectWrapper onClick={handleSelectVisible} ref={selectRef} size={size}>
      <SelectValue>{value ? value : title}</SelectValue>
      <SelectOptionWrapper visible={isVisible}>
        {options &&
          options.map((option: string | number) => {
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
//SelectBox 컴포넌트의 사용법은 부모컴포넌트로부터 4개의 props 를 받아야합니다.
//options(셀렉트박스안에 들어갈 여러개의 값들의 객체or배열),value(부모컴포넌트의state),setValue(부모컴포넌트의 setState),title(첫 렌더링시 어떤 셀렉트박스인지 구분하기위한 props)
//이 컴포넌트를 사용하는 페이지에서 useState를 사용하여 값을 관리해주시면 됩니다.
//pages/userinfo/position.tsx 에서 사용법을 확인할 수 있습니다.
