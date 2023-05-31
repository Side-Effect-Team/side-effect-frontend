import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeProvider } from "styled-components";
import { Wrapper, MobileNavBar, MobileMenuItem } from "./styled";
import GlobalStyles from "@/styles/Global";
import { theme } from "@/styles/Theme";
import { breakPoints } from "@/styles/Media";
import Header from "../Header";
import Footer from "../Footer";
import Toast from "../Toast";
import ScrollToTop from "../ScrollToTop";
import Head from "next/head";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openModal } from "@/store/modalSlice";
import { removeAuthentication } from "@/store/authSlice";

interface PropType {
  children: React.ReactNode;
}

interface MobileMenuProps {
  hide: boolean;
  logout: () => void;
  handleClick: () => void;
}

export default function Layout({ children }: PropType) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const logout = () => {
    if (window.confirm("정말 로그아웃하시겠습니까?"))
      dispatch(() => removeAuthentication());
  };

  const mobileLogout = () => {
    logout();
    handleMobileMenu();
  };

  // 뷰포트 width가 모바일 width 보다 커지면 모바일 메뉴 닫음
  const detectViewportWidth = () => {
    if (window.innerWidth > breakPoints.mobile) setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      window.addEventListener("resize", detectViewportWidth);

      return () => window.removeEventListener("resize", detectViewportWidth);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <title>사이드 이펙트 | 빠르게 프로젝트를 시작하세요</title>
      </Head>
      <Header logout={logout} handleMobileMenu={handleMobileMenu} />
      <ScrollToTop />
      <Toast />
      <MobileMenu
        hide={!mobileMenuOpen}
        logout={mobileLogout}
        handleClick={handleMobileMenu}
      />
      <Wrapper mobileMenuOpen={mobileMenuOpen}>{children}</Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

function MobileMenu({ hide, logout, handleClick }: MobileMenuProps) {
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
          <Link href="/">로그인</Link>
        </MobileMenuItem>
      )}
    </MobileNavBar>
  );
}
