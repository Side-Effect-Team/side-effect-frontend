import { Wrapper } from "./styled";
import HamburgerIcon from "../HamburgerIcon";

export type HandleMobileMenu = (e: React.MouseEvent<HTMLButtonElement>) => void;

interface MobileMenuBoxProps {
  handleMobileMenu: HandleMobileMenu;
}

export default function MobileMenuBox({
  handleMobileMenu,
}: MobileMenuBoxProps) {
  return (
    <Wrapper onClick={handleMobileMenu}>
      <HamburgerIcon />
    </Wrapper>
  );
}
