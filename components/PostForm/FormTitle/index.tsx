import { Title } from "./styled";

interface FormTitleProps {
  title: string;
}

export default function FormTitle({ title }: FormTitleProps) {
  return <Title>{title}</Title>;
}
