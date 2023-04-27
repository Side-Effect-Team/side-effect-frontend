import { InputStyle, Label, StyledInput } from "./styled";

export default function Input({ label, ...rest }: InputStyle) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <StyledInput {...rest} />
    </>
  );
}
