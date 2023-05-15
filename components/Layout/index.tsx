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
import { BOARD_LIST } from "../../enum";
import ScrollToTop from "../ScrollToTop";
import Head from "next/head";

interface PropType {
  children: React.ReactNode;
}

const MOBILE_BOARD_LIST = [
  ...BOARD_LIST,
  {
    ID: 2,
    TITLE: "로그인",
    LINK: "/",
  },
];

interface MobileMenuProps {
  hide: boolean;
}

export default function Layout({ children }: PropType) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const currentPage = router.route;

  const handleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
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
      <Header handleMobileMenu={handleMobileMenu} />
      <ScrollToTop />
      <Toast />
      <MobileMenu hide={!mobileMenuOpen} />
      <Wrapper mobileMenuOpen={mobileMenuOpen}>{children}</Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

function MobileMenu({ hide }: MobileMenuProps) {
  return (
    <MobileNavBar hide={hide}>
      {MOBILE_BOARD_LIST.map((board) => (
        <MobileMenuItem key={board.ID}>
          <Link href={board.LINK}>{board.TITLE}</Link>
        </MobileMenuItem>
      ))}
    </MobileNavBar>
  );
}
