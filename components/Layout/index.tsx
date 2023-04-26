import { ThemeProvider } from "styled-components";
import { StyledContainer } from "./styled";
import GlobalStyles from "../../styles/Global";
import { theme } from "../../styles/Theme";
import { useRouter } from "next/router";

interface PropType {
  children: React.ReactNode;
}

export default function Layout({ children }: PropType) {
  const router = useRouter();
  const currentPage = router.route;
  /** userinfo 페이지에선 헤더가 안보이기위한 코드 */
  if (currentPage.startsWith("/userinfo")) {
    return (
      <>
        <GlobalStyles />
        {children}
      </>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>{children}</Container>
    </ThemeProvider>
  );
}

const Container = ({ children }: PropType) => {
  return <StyledContainer>{children}</StyledContainer>;
};
