import { Wrapper } from "./styled";
import { IoReorderThree } from "react-icons/io5";

interface MobileMenuButtonProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <Wrapper onClick={onClick}>
      <IoReorderThree />
    </Wrapper>
  );
}
