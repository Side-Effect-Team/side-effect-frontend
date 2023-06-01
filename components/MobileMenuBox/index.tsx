import { Dispatch, SetStateAction } from "react";
import { IoReorderThree } from "react-icons/io5";
import { Wrapper } from "./styled";
import Button from "@/components/Button";
import Alarm from "../Alarm";
import { useAppSelector } from "@/store/hooks";

interface MobileMenuBoxProps {
  handleMobileMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
  openAlarm: boolean;
  setOpenAlarm: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenuBox({
  handleMobileMenu,
  openAlarm,
  setOpenAlarm,
}: MobileMenuBoxProps) {
  const { token } = useAppSelector((state) => state.auth);

  return (
    <Wrapper>
      {token && <Alarm openAlarm={openAlarm} setOpenAlarm={setOpenAlarm} />}
      <Button onClick={handleMobileMenu}>
        <IoReorderThree />
      </Button>
    </Wrapper>
  );
}
