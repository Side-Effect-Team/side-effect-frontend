import { Wrapper } from "./styled";
import { IoReorderThree } from "react-icons/io5";
import Button from "@/components/Button";
import Alarm from "../Alarm";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "@/hooks/common/useLocalStorage";

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
  const [isLogin, setIsLogin] = useState(false);
  const { getter } = useLocalStorage();

  useEffect(() => {
    if (getter("accessToken")) setIsLogin(true);
  }, [isLogin]);

  return (
    <Wrapper>
      {isLogin && <Alarm openAlarm={openAlarm} setOpenAlarm={setOpenAlarm} />}
      <Button onClick={handleMobileMenu}>
        <IoReorderThree />
      </Button>
    </Wrapper>
  );
}
