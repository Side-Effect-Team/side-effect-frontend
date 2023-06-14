import styled from "styled-components";
import { sizes } from "styles/media";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.5rem 0;
  max-width: ${sizes.desktop}px;
`;

export const ContentsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const HeaderStyled = styled.h2`
  padding: 0.5rem 0;
`;
