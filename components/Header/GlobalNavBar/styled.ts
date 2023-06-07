import styled from "styled-components";
import { mediaQuery } from "@/styles/Media";
import { media } from "@/styles/mediatest";

export const Wrapper = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.mainBackGround};
  height: ${(p) => p.theme.height.header};
  transition: all 0.3s;
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
  width: 40vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
  a {
    color: ${(p) => p.theme.textColor};
  }
  ${mediaQuery("mobile")`
    display: none;
  `};
`;

export const BoxStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  ${media.mobile} {
    margin-left: auto;
    margin-right: 20px;
  }
`;

export const ButtonBox = styled.div`
  ${mediaQuery("mobile")`
    display: none;
  `};
`;
