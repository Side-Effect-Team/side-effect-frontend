import styled from "styled-components";
import { mediaQuery } from "../../styles/Media";

export const Wrapper = styled.div`
  ${mediaQuery("mobile")`
    margin-top: 0;
  `};

  margin-top: ${(p) => p.theme.height.header};
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
