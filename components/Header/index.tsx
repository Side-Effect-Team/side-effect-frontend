import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";
import { Wrapper, HeaderStyled, Logo, NavStyled, BoxStyled } from "./styled";
import MobileMenuBox from "../MobileMenuBox";
import { BOARD_LIST } from "../../enum";
import Button from "../Button";
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/modalSlice";

interface HeaderProps {
  handleMobileMenu: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Header({ handleMobileMenu }: HeaderProps) {
  const dispatch = useAppDispatch();
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
          <Button>
            <IoNotificationsOutline />
          </Button>
          <Button
            onClick={() => dispatch(openModal({ modalType: "LoginModal" }))}
          >
            로그인
          </Button>
        </BoxStyled>
        <MobileMenuBox onClick={handleMobileMenu} />
      </HeaderStyled>
    </Wrapper>
  );
}
