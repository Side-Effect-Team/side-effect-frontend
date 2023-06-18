import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./styled";
import GlobalStyles from "styles/Global";
import { darkTheme, lightTheme } from "styles/Theme";
import { sizes } from "styles/media";
import GlobalNavBar from "../Header/GlobalNavBar";
import Footer from "../Footer";
import Toast from "../Toast";
import ScrollToTop from "../ScrollToTop";
import Head from "next/head";
import { useAppSelector } from "store/hooks";
import MobileHeader from "../Header/MobileHeader";
import { handleLogout } from "apis/UserAPI";
import useOutsideClick from "hooks/common/useOutsideClick";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { isDark } = useAppSelector((state) => state.darkMode);
  const router = useRouter();
  const mobileMenuEl = useRef<HTMLDivElement>(null);
  useOutsideClick(mobileMenuEl, () => setMobileMenuOpen(false));

  //다크모드일경우 새로고침시 화면 반짝임을 제어합니다.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const logout = async () => {
    if (window.confirm("정말 로그아웃하시겠습니까?")) {
      await handleLogout();
      if (router.pathname === "/mypage") await router.replace("/");
    }
  };

  const mobileLogout = () => {
    logout();
    handleMobileMenu();
  };

  // 뷰포트 width가 모바일 width 보다 커지면 모바일 메뉴 닫음
  const detectViewportWidth = () => {
    if (window.innerWidth > sizes.mobile) setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      window.addEventListener("resize", detectViewportWidth);

      return () => window.removeEventListener("resize", detectViewportWidth);
    }
  });

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles isMounted={isMounted} />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <title>사이드 이펙트 | 빠르게 프로젝트를 시작하세요</title>
      </Head>
      <GlobalNavBar logout={logout} handleMobileMenu={handleMobileMenu} />
      <ScrollToTop />
      <Toast />
      <div ref={mobileMenuEl}>
        <MobileHeader
          hide={!mobileMenuOpen}
          logout={mobileLogout}
          handleClick={handleMobileMenu}
        />
      </div>

      <Wrapper mobileMenuOpen={mobileMenuOpen}>{children}</Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
