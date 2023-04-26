import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(p) => p.theme.colors.background};
`;

export const MainStyled = styled.section`
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: ${(p) => p.theme.sizes.desktop};
`;
