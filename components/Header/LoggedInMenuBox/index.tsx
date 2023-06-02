import {
  BoxStyled,
  LoggedInBox,
} from "@/components/Header/GlobalNavBar/styled";
import Alarm from "@/components/Alarm";
import Button from "@/components/Button";
import { openModal } from "@/store/modalSlice";
import { useAppSelector } from "@/store/hooks";
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/common/useOutsideClick";

export default function LoggedInMenuBox() {
  const AlarmListRef = useRef(null);
  const [openAlarm, setOpenAlarm] = useState(false);
  const { token } = useAppSelector((state) => state.auth);

  useOutsideClick(AlarmListRef, () => setOpenAlarm(false));

  return (
    <BoxStyled ref={AlarmListRef}>
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
  );
}
