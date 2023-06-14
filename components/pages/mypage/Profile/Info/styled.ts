import { media } from "styles/media";
import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${(p) => p.theme.grayToDark};
`;
export const InfoTitle = styled.p`
  min-width: 30%;
  color: ${(p) => p.theme.colors.darkGray};
  font-weight: 600;
  ${media.mobile} {
    font-size: 14px;
  }
`;
export const InfoContent = styled.p`
  color: ${(p) => p.theme.textColor};
  font-weight: 600;
  ${media.mobile} {
    font-size: 14px;
  }
`;
export const InfoContentLink = styled.a`
  font-weight: 600;
  cursor: pointer;
  color: ${(p) => p.theme.textColor};
  ${media.mobile} {
    font-size: 14px;
  }
`;
export const Text = styled.p`
  color: ${(p) => p.theme.colors.darkGray};
  margin: 0;
  ${media.mobile} {
    font-size: 14px;
  }
`;
