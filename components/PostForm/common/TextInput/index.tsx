import { InputStyled } from "./styled";
import { FocusEventHandler } from "react";

interface TextInputProps {
  idName: string;
  placeholder: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleBlur: FocusEventHandler;
}

export default function TextInput({
  idName,
  placeholder,
  value,
  handleChange,
  handleBlur,
}: TextInputProps) {
  return (
    <InputStyled
      type="text"
      id={idName}
      name={idName}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}
