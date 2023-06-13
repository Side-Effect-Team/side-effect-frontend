import styled from "styled-components";
import { media } from "styles/media";

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
  box-shadow: 0 8px 8px -12px black;
`;

export const HeaderStyled = styled.header`
  width: 100%;
  max-width: ${(p) => p.theme.sizes.desktop};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
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

  ${media.mobile} {
    display: none;
  }
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
  ${media.mobile} {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 110px;
  ${media.mobile} {
    width: 90px;
  }
`;
