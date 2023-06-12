import Link from "next/link";
import Image from "next/image";
import {
  Wrapper,
  HeaderStyled,
  NavStyled,
  BoxStyled,
  ButtonBox,
} from "./styled";
import MobileMenuBox from "../MobileMenuBox";
import { BOARD_LIST } from "../../../enum";
import Button from "../../Button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openModal } from "@/store/modalSlice";

import LoggedInMenuBox from "@/components/Header/LoggedInMenuBox";

interface GlobalNavBarProps {
  logout: () => void;
  handleMobileMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function GlobalNavBar({
  logout,
  handleMobileMenu,
}: GlobalNavBarProps) {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  return (
    <Wrapper>
      <HeaderStyled>
        <Link href="/">
          <Image
            src="./images/mainLogo.svg"
            alt="사이드이펙트 로고"
            width={100}
            height={50}
            priority
          />
        </Link>
        <NavStyled>
          {BOARD_LIST.map((board) => (
            <Link key={board.ID} href={board.LINK}>
              {board.TITLE}
            </Link>
          ))}
        </NavStyled>
        <BoxStyled>
          {token && <LoggedInMenuBox />}
          <ButtonBox>
            {token ? (
              <Button onClick={logout}>로그아웃</Button>
            ) : (
              <Button
                onClick={() => dispatch(openModal({ modalType: "LoginModal" }))}
              >
                로그인
              </Button>
            )}
          </ButtonBox>
        </BoxStyled>
        <MobileMenuBox handleMobileMenu={handleMobileMenu} />
      </HeaderStyled>
    </Wrapper>
  );
}
