import { Wrapper } from "./styled";

interface InputLabelProps {
  idName: string;
  label: string;
}

export default function InputLabel({ idName, label }: InputLabelProps) {
  return <Wrapper htmlFor={idName}>{label}</Wrapper>;
}
