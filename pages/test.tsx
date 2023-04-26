import styled from "styled-components";
import MobileMenuButton from "../components/MobileMenuButton";

export default function TestPage() {
  return (
    <Wrapper>
      <HeaderStyled>
        <MobileMenuButton />
      </HeaderStyled>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: steelblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderStyled = styled.header`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`;
