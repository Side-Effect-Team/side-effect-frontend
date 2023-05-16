import { Wrapper } from "./styled";
import { IoReorderThree } from "react-icons/io5";
import Button from "@/components/Button";
import Alarm from "../Alarm";

interface MobileMenuBoxProps {
  handleMobileMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MobileMenuBox({
  handleMobileMenu,
}: MobileMenuBoxProps) {
  return (
    <Wrapper>
      <Alarm />
      <Button onClick={handleMobileMenu}>
        <IoReorderThree />
      </Button>
    </Wrapper>
  );
}
