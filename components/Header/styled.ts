import styled from "styled-components";
import { mediaQuery } from "../../styles/Media";

export const StyledHeader = styled.header`
  background-color: white;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  padding: 1rem 10vw;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryTextColor};

  ${mediaQuery("mobile")`
    padding: 1rem;
  `}
`;

export const StyledNav = styled.nav`
  width: 30vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
