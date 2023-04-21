import Link from "next/link";
import styled from "styled-components";
import { BOARD_LIST } from "../Enum";

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">사이드이펙트</Link>
      <StyledNav>
        {BOARD_LIST.map((board) => {
          return (
            <Link key={board} href="/">
              {board}
            </Link>
          );
        })}
      </StyledNav>
      <StyledBox>
        <Link href="/">로그인</Link>
        <Link href="/">마이페이지</Link>
      </StyledBox>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
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

  @media (max-width: ${(props) => props.theme.viewport.large}) {
    padding: 1rem;
  }
`;

const StyledNav = styled.nav`
  width: 30vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export default Header;
