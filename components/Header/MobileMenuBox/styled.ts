import styled from "styled-components";
import { media } from "styles/media";
import { type HandleMobileMenu } from "./index";

export const Wrapper = styled.button<{
  onClick: HandleMobileMenu;
}>`
  ${media.mobile} {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  background: transparent;
  border: 0;
  display: none;
`;
