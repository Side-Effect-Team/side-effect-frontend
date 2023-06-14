import styled from "styled-components";
import { sizes } from "styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 0;
  background: ${(p) => p.theme.mainBackGround};
`;

export const Contents = styled.div`
  margin: 0 auto;
  padding: 1.5rem 1rem;
  max-width: ${sizes.desktop}px;
`;
