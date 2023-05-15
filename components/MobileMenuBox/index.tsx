import { Wrapper } from "./styled";
import { IoNotificationsOutline, IoReorderThree } from "react-icons/io5";
import Button from "@/components/Button";

interface MobileMenuBoxProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function MobileMenuBox({ onClick }: MobileMenuBoxProps) {
  return (
    <Wrapper onClick={onClick}>
      <Button>
        <IoNotificationsOutline />
      </Button>
      <Button>
        <IoReorderThree />
      </Button>
    </Wrapper>
  );
}
