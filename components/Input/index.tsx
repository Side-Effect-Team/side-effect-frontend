import { useRef } from "react";
import { InputStyle, Label, StyledInput } from "./styled";

export default function Input({ label, ...rest }: InputStyle) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {label && <Label htmlFor="input">{label}</Label>}
      <StyledInput id="input" ref={inputRef} {...rest} />
    </>
  );
}
