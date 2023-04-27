import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(p) => p.theme.colors.gray};
`;

export const FooterStyled = styled.footer`
  width: 100%;
  height: 100%;
  max-width: ${(p) => p.theme.sizes.desktop};
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
