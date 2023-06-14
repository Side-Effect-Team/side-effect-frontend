import styled from "styled-components";
import { media } from "styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
  ${media.mobile} {
    padding: 0 1rem;
  }
`;
