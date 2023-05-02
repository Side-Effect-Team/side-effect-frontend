import Link from "next/link";
import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";
import { Wrapper, HeaderStyled, Logo, NavStyled, BoxStyled } from "./styled";
import MobileMenuButton from "../MobileMenuButton";
import { BOARD_LIST } from "../../enum";

// IoNotificationsSharp : 라이트모드
// IoNotificationsOutline : 다크모드

interface HeaderProps {
  handleMobileMenu: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Header({ handleMobileMenu }: HeaderProps) {
  return (
    <Wrapper>
      <HeaderStyled>
        <Logo>
          <Link href="/">사이드이펙트</Link>
        </Logo>
        <NavStyled>
          {BOARD_LIST.map((board) => (
            <Link key={board.ID} href={board.LINK}>
              {board.TITLE}
            </Link>
          ))}
        </NavStyled>
        <BoxStyled>
          <Link href="/">
            <IoNotificationsSharp />
          </Link>
          <Link href="/">로그인</Link>
        </BoxStyled>
        <MobileMenuButton onClick={handleMobileMenu} />
      </HeaderStyled>
    </Wrapper>
  );
}
