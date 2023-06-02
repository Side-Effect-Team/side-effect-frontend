import { IoReorderThree } from "react-icons/io5";
import { Wrapper } from "./styled";
import Button from "@/components/Button";

interface MobileMenuBoxProps {
  handleMobileMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MobileMenuBox({
  handleMobileMenu,
}: MobileMenuBoxProps) {
  return (
    <Wrapper>
      <Button onClick={handleMobileMenu}>
        <IoReorderThree />
      </Button>
    </Wrapper>
  );
}
