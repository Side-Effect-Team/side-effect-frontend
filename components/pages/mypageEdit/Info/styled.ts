import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { media } from "@/styles/mediatest";

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 10px;
  border: 1px solid #d9d9d9;
  ${media.mobile} {
    width: 100%;
  }

  :focus {
    border: 1px solid ${theme.brandColor.primary};
    outline: none;
  }
`;
