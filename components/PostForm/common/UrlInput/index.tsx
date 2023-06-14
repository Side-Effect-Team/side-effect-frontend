import { InputStyled } from "../TextInput/styled";
import { FocusEventHandler } from "react";

interface UrlInputProps {
  idName: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: FocusEventHandler;
}

export default function UrlInput({
  idName,
  placeholder,
  value,
  handleChange,
  handleBlur,
}: UrlInputProps) {
  return (
    <InputStyled
      type="url"
      id={idName}
      name={idName}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}
