import { Wrapper } from "./styled";
import { IoReorderThree } from "react-icons/io5";
import Button from "@/components/Button";
import Alarm from "../Alarm";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

interface MobileMenuBoxProps {
  isLogin: boolean;
  handleMobileMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
  openAlarm: boolean;
  setOpenAlarm: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenuBox({
  isLogin,
  handleMobileMenu,
  openAlarm,
  setOpenAlarm,
}: MobileMenuBoxProps) {
  return (
    <Wrapper>
      {isLogin && <Alarm openAlarm={openAlarm} setOpenAlarm={setOpenAlarm} />}
      <Button onClick={handleMobileMenu}>
        <IoReorderThree />
      </Button>
    </Wrapper>
  );
}
