import styled from "styled-components";
import { media } from "styles/media";

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 10px;
  color: ${(p) => p.theme.textColor};
  border: 1px solid ${(p) => p.theme.grayToDark};
  background-color: ${(p) => p.theme.mainBackGround};
  border-radius: 10px;
  ${media.mobile} {
    width: 100%;
    font-size: 14px;
    height: 2.5rem;
  }

  :focus {
    border: 1px solid ${(p) => p.theme.brandColor.primary};
    outline: none;
  }
`;
