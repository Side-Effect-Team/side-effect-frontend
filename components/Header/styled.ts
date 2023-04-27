import styled from "styled-components";
import { mediaQuery } from "../../styles/Media";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.colors.background};
  height: ${(p) => p.theme.height.header};
`;

export const HeaderStyled = styled.header`
  width: 100%;
  max-width: ${(p) => p.theme.sizes.desktop};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const Logo = styled.h2`
  background: -webkit-linear-gradient(45deg, red, blue);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`;

export const NavStyled = styled.nav`
  width: 30vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQuery("mobile")`
    display: none;
  `}
`;

export const BoxStyled = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;

  ${mediaQuery("mobile")`
    display: none;
  `}
`;
