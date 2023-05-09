import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";
import { Wrapper, HeaderStyled, Logo, NavStyled, BoxStyled } from "./styled";
import MobileMenuButton from "../MobileMenuButton";
import { BOARD_LIST } from "../../enum";
import Button from "../Button";
import { MouseEvent, useState } from "react";
import Notification from "../Notification";

interface HeaderProps {
  handleMobileMenu: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Header({ handleMobileMenu }: HeaderProps) {
  const [isActive, setIsActive] = useState(false);
  const onClickNotification = () => {
    setIsActive((prev) => !prev);
  };
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
          <Button onClick={onClickNotification}>
            <IoNotificationsOutline />
          </Button>
          <Button>로그인</Button>
        </BoxStyled>
        <MobileMenuButton onClick={handleMobileMenu} />
      </HeaderStyled>
      {isActive && <Notification />}
    </Wrapper>
  );
}
