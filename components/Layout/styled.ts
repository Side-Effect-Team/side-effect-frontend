import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles/Media";

interface WrapperProps {
  mobileMenuOpen: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  margin-top: ${(p) => p.theme.height.header};

  ${(p) =>
    p.mobileMenuOpen &&
    css`
      ${mediaQuery("mobile")`
        margin-top: 0;
      `};
    `}
`;

export const MobileNavBar = styled.nav`
  ${mediaQuery("mobile")`
    margin-top: 75px;
    background: #eee;
    width: 100%;
  `}
`;

export const MobileMenuItem = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;

  &:first-child {
    border-top: 1px solid black;
  }
`;
