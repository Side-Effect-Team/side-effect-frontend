import Link from "next/link";
import { Wrapper, FooterStyled } from "./styled";

export default function Footer() {
  return (
    <Wrapper>
      <FooterStyled>
        <span>
          Copyright &copy; <Link href="/">사이드 이펙트</Link>
        </span>
      </FooterStyled>
    </Wrapper>
  );
}
