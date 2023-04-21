import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/Global";
import { theme } from "../styles/Theme";

interface PropType {
  children: React.ReactNode;
}

export default function Layout({ children }: PropType) {
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

const StyledContainer = styled.div`
  max-width: 1360px;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 80px;
  height: 100%;
`;
