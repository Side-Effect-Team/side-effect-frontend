import Link from "next/link";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { MobileMenuItem, MobileNavBar } from "./styled";
import { openModal } from "store/modalSlice";

interface MobileHeaderProps {
  hide: boolean;
  logout: () => void;
  handleClick: () => void;
}

export default function MobileHeader({
  hide,
  logout,
  handleClick,
}: MobileHeaderProps) {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  return (
    <MobileNavBar hide={hide}>
      <MobileMenuItem onClick={handleClick}>
        <Link href="/projects">프로젝트 자랑 게시판</Link>
      </MobileMenuItem>
      <MobileMenuItem onClick={handleClick}>
        <Link href="/recruits">팀원 모집 게시판</Link>
      </MobileMenuItem>
      {token ? (
        <MobileMenuItem onClick={logout}>
          <Link href="/">로그아웃</Link>
        </MobileMenuItem>
      ) : (
        <MobileMenuItem
          onClick={() => dispatch(openModal({ modalType: "LoginModal" }))}
        >
          로그인
        </MobileMenuItem>
      )}
    </MobileNavBar>
  );
}
