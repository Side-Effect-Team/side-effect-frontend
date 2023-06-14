import styled, { css } from "styled-components";
import { media } from "styles/media";

interface MobileNavBarProps {
  hide: boolean;
}

export const MobileNavBar = styled.nav<MobileNavBarProps>`
  position: fixed;
  z-index: 7;
  transition: all ease-out 0.5s;

  ${(p) =>
    p.hide
      ? css`
          top: -235px;
        `
      : css`
          top: 75px;
        `}

  ${media.mobile} {
    background: ${(p) => p.theme.footerBgColor};
    width: 100%;
  }
`;

export const MobileMenuItem = styled.div`
  padding: 1.75rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(p) => p.theme.textColor};
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;

  a {
    color: ${(p) => p.theme.textColor};
  }

  &:first-child {
    border-bottom: 1px solid ${(p) => p.theme.textColor};
    border-top: 1px solid ${(p) => p.theme.textColor};
  }
`;
