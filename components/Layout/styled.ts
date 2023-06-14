import styled from "styled-components";

interface WrapperProps {
  mobileMenuOpen: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  margin-top: ${(p) => p.theme.height.header};
`;
