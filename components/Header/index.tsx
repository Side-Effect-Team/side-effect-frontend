import Link from "next/link";
import { StyledHeader, StyledNav, StyledBox } from "./styled";
import { BOARD_LIST } from "../../enum";

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">사이드이펙트</Link>
      <StyledNav>
        {BOARD_LIST.map((board) => {
          return (
            <Link key={board} href="/">
              {board}
            </Link>
          );
        })}
      </StyledNav>
      <StyledBox>
        <Link href="/">로그인</Link>
        <Link href="/">마이페이지</Link>
      </StyledBox>
    </StyledHeader>
  );
};

export default Header;
