import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeProvider } from "styled-components";
import { Wrapper, MobileNavBar, MobileMenuItem } from "./styled";
import GlobalStyles from "../../styles/Global";
import { theme } from "../../styles/Theme";
import { breakPoints } from "../../styles/Media";
import Header from "../Header";
import Footer from "../Footer";
import { BOARD_LIST } from "../../enum";

interface PropType {
  children: React.ReactNode;
}

const MOBILE_BOARD_LIST = [...BOARD_LIST, "로그인"];

export default function Layout({ children }: PropType) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const currentPage = router.route;

  const handleMobileMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    setMobileMenuOpen((s) => !s);
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
      <Header handleMobileMenu={handleMobileMenu} />
      {mobileMenuOpen && <MobileMenu />}
      <Wrapper>{children}</Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

function MobileMenu() {
  return (
    <MobileNavBar>
      {MOBILE_BOARD_LIST.map((board) => (
        <MobileMenuItem key={board}>
          <Link href="/">{board}</Link>
        </MobileMenuItem>
      ))}
    </MobileNavBar>
  );
}
