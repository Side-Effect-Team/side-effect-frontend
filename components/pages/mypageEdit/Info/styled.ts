import styled from "styled-components";
import { media } from "@/styles/mediatest";

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 10px;
  border: 1px solid ${(p) => p.theme.brandColor.mediumGray};
  ${media.mobile} {
    width: 100%;
  }

  :focus {
    border: 1px solid ${(p) => p.theme.brandColor.primary};
    outline: none;
  }
`;
