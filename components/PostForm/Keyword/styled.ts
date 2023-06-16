import styled from "styled-components";

interface WrapperProps {
  isActive: boolean;
}

export const Wrapper = styled.li<WrapperProps>`
  //background: ${(p) => p.isActive && p.theme.footerBgColor};

  :hover {
    background: ${(p) => p.theme.footerBgColor};
  }
`;

export const ButtonStyled = styled.button`
  background: transparent;
  border: none;
  outline: none;
  padding: 1rem;
  color: ${(p) => p.theme.textColor};
`;
