import Link from "next/link";
import { StyledHeader, StyledNav, StyledBox } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">사이드이펙트</Link>
      <StyledNav></StyledNav>
      <StyledBox>
        <Link href="/">로그인</Link>
        <Link href="/">마이페이지</Link>
      </StyledBox>
    </StyledHeader>
  );
};

export default Header;
