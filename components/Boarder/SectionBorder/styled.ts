import { media } from "styles/media";
import styled from "styled-components";

export const SectionHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${media.mobile} {
    display: none;
  }
`;

export const SectionTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-right: 15px;
`;

export const Border = styled.div`
  flex: 1;
  border-bottom: 2px solid ${(p) => p.theme.grayToDark};
`;
