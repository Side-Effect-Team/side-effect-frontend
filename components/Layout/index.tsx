import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { useLocalStorage } from "@/hooks/common/useLocalStorage";
import { openModal } from "@/store/modalSlice";

interface PropType {
  children: React.ReactNode;
}

interface MobileMenuProps {
  hide: boolean;
  isLogin: boolean;
  logout: () => void;
  handleClick: () => void;
}

export default function Layout({ children }: PropType) {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { authenticated, token } = useAppSelector((state) => state.auth);
  const { getter, cleaner } = useLocalStorage();
  console.log("authenticated", authenticated);
  console.log("token", token);

  const router = useRouter();
  const currentPage = router.route;

  const handleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const logout = () => {
    if (window.confirm("정말 로그아웃하시겠습니까?")) {
      cleaner("accessToken");
      cleaner("id");
      setIsLogin(false);
    }
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

  useEffect(() => {
    if (getter("accessToken")) setIsLogin(true);
  });

  /** userinfo 페이지에선 헤더가 안보이기위한 코드 */
  if (currentPage.startsWith("/userinfo")) {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </>
    );
  }

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
      <Header
        isLogin={isLogin}
        logout={logout}
        handleMobileMenu={handleMobileMenu}
      />
      <ScrollToTop />
      <Toast />
      <MobileMenu
        hide={!mobileMenuOpen}
        isLogin={isLogin}
        logout={mobileLogout}
        handleClick={handleMobileMenu}
      />
      <Wrapper mobileMenuOpen={mobileMenuOpen}>{children}</Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

function MobileMenu({ hide, isLogin, logout, handleClick }: MobileMenuProps) {
  const dispatch = useAppDispatch();

  return (
    <MobileNavBar hide={hide}>
      <MobileMenuItem onClick={handleClick}>
        <Link href="/projects">프로젝트 자랑 게시판</Link>
      </MobileMenuItem>
      <MobileMenuItem onClick={handleClick}>
        <Link href="/recruits">팀원 모집 게시판</Link>
      </MobileMenuItem>
      {isLogin ? (
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
