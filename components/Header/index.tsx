import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  Wrapper,
  HeaderStyled,
  Logo,
  NavStyled,
  BoxStyled,
  NotificationButton,
  NotificationDiv,
  GetAlarm,
} from "./styled";
import MobileMenuButton from "../MobileMenuButton";
import { BOARD_LIST } from "../../enum";
import Button from "../Button";
import { useEffect, useState } from "react";
import Notification, { NotificationProps } from "../Notification";
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/modalSlice";
import axios from "axios";

interface HeaderProps {
  handleMobileMenu: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Header({ handleMobileMenu }: HeaderProps) {
  const [isActive, setIsActive] = useState(false);
  const [notification, setNotification] = useState<NotificationProps | null>(
    null,
  );
  const onClickNotification = async () => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    // 알림창 열고 닫기
    setIsActive((prev) => !prev);
    // 알람 리스트 불러오기
    try {
      const response = await axios.get(
        `https://417359b3-a6b2-453e-bb09-1371913815a7.mock.pstmn.io/alarmlist`,
        config,
      );
      setNotification(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useAppDispatch();

  // 알람이 있는지 없는지 확인하는 로직
  const [isAlarm, setIsAlarm] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const alarmCheck = async () => {
      try {
        const response = await axios.get(
          `https://417359b3-a6b2-453e-bb09-1371913815a7.mock.pstmn.io/alarmcheck`,
          config,
        );
        setIsAlarm(response.data.alarm);
      } catch (error) {
        console.log(error);
      }
    };
    alarmCheck();
  }, []);
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
          <NotificationDiv onClick={onClickNotification}>
            <NotificationButton />
            {isAlarm && <GetAlarm />}
          </NotificationDiv>
          {isActive && notification && (
            <Notification notification={notification} />
          )}
          <Button
            onClick={() => dispatch(openModal({ modalType: "LoginModal" }))}
          >
            로그인
          </Button>
        </BoxStyled>
        <MobileMenuButton onClick={handleMobileMenu} />
      </HeaderStyled>
    </Wrapper>
  );
}
