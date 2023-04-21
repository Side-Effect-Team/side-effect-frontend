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
  margin-top: 75px;
`;
