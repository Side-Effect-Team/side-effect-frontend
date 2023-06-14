import { Wrapper } from "../TextInput/styled";

interface UrlInputProps {
  idName: string;
  placeholder: string;
}

export default function UrlInput({ idName, placeholder }: UrlInputProps) {
  return (
    <Wrapper type="url" id={idName} name={idName} placeholder={placeholder} />
  );
}
