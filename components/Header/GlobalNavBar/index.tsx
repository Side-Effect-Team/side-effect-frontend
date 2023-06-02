import Link from "next/link";
import {
  Wrapper,
  HeaderStyled,
  Logo,
  NavStyled,
  BoxStyled,
  LoggedInBox,
} from "./styled";
import MobileMenuBox from "../MobileMenuBox";
import { BOARD_LIST } from "../../../enum";
import Button from "../../Button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openModal } from "@/store/modalSlice";
import Alarm from "../../Alarm";
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/common/useOutsideClick";

interface GlobalNavBarProps {
  logout: () => void;
  handleMobileMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function GlobalNavBar({
  logout,
  handleMobileMenu,
}: GlobalNavBarProps) {
  const [openAlarm, setOpenAlarm] = useState(false);
  const AlarmListRef = useRef(null);
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  useOutsideClick(AlarmListRef, () => setOpenAlarm(false));

  return (
    <Wrapper ref={AlarmListRef}>
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
          {token && (
            <LoggedInBox>
              <div>프로필</div>
              <Alarm openAlarm={openAlarm} setOpenAlarm={setOpenAlarm} />
            </LoggedInBox>
          )}
          {token ? (
            <Button onClick={logout}>로그아웃</Button>
          ) : (
            <Button
              onClick={() => dispatch(openModal({ modalType: "LoginModal" }))}
            >
              로그인
            </Button>
          )}
        </BoxStyled>
        <MobileMenuBox
          handleMobileMenu={handleMobileMenu}
          openAlarm={openAlarm}
          setOpenAlarm={setOpenAlarm}
        />
      </HeaderStyled>
    </Wrapper>
  );
}
