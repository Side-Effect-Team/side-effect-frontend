import Link from "next/link";
import { Wrapper, HeaderStyled, Logo, NavStyled, BoxStyled } from "./styled";
import MobileMenuBox from "../MobileMenuBox";
import { BOARD_LIST } from "../../enum";
import Button from "../Button";
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/modalSlice";
import Alarm from "../Alarm";
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

interface HeaderProps {
  handleMobileMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Header({ handleMobileMenu }: HeaderProps) {
  const dispatch = useAppDispatch();
  const [openAlarm, setOpenAlarm] = useState(false);
  const AlarmListRef = useRef(null);
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
          <Alarm openAlarm={openAlarm} setOpenAlarm={setOpenAlarm} />
          <Button
            onClick={() => dispatch(openModal({ modalType: "LoginModal" }))}
          >
            로그인
          </Button>
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
