import { SpanStyled } from "./styled";

interface FormErrMsgProps {
  msg: string;
}

export default function FormErrMsg({ msg }: FormErrMsgProps) {
  return <SpanStyled>{msg}</SpanStyled>;
}
