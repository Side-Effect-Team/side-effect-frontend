import { media } from "styles/media";
import styled from "styled-components";

export const Wrapper = styled.footer`
  background: ${(p) => p.theme.footerBgColor};
  color: ${(p) => p.theme.textColor};
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  max-width: ${(p) => p.theme.sizes.desktop};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20vw;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ColumnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12.5vw;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: ${(p) => p.theme.textColor};
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 110px;

  ${media.mobile} {
    width: 90px;
  }
`;
