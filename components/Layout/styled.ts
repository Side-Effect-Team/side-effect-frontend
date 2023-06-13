import styled, { css } from "styled-components";
import { media } from "styles/media";

interface WrapperProps {
  mobileMenuOpen: boolean;
}

interface MobileNavBarProps {
  hide: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  margin-top: ${(p) => p.theme.height.header};
`;

export const MobileNavBar = styled.nav<MobileNavBarProps>`
  position: fixed;
  z-index: 5;
  transition: all ease-out 0.5s;
  ${(p) =>
    p.hide
      ? css`
          top: -50px;
        `
      : css`
          top: 75px;
        `}

  ${media.mobile} {
    background: #eee;
    width: 100%;
  }
`;

export const MobileMenuItem = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;

  &:first-child {
    border-top: 1px solid black;
  }
`;
