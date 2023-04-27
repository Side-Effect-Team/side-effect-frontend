import { ButtonStyle, StyledButton } from "./styled";

export default function Button({
  children,
  ...rest
}: ButtonStyle): JSX.Element {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
