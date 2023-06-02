import { useRef } from "react";
import { InputStyle, Label, StyledInput } from "./styled";

export default function Input({ label, ...rest }: InputStyle) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickLabel = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      {label && <Label onClick={onClickLabel}>{label}</Label>}
      <StyledInput ref={inputRef} {...rest} />
    </>
  );
}
