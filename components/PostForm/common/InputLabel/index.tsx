import { LabelStyled } from "./styled";

interface InputLabelProps {
  idName: string;
  label: string;
}

export default function InputLabel({ idName, label }: InputLabelProps) {
  return <LabelStyled htmlFor={idName}>{label}</LabelStyled>;
}
