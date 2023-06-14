import { Wrapper } from "./styled";

interface TextInputProps {
  idName: string;
  placeholder: string;
}

export default function TextInput({ idName, placeholder }: TextInputProps) {
  return (
    <Wrapper type="text" id={idName} name={idName} placeholder={placeholder} />
  );
}
