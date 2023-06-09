import styled from "styled-components";
import { media } from "styles/media";
import { theme } from "styles/Theme";
import { lighten } from "polished";

export const ScrollToTopWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: ${theme.brandColor.primary};
  color: ${theme.brandColor.lightGray};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: pointer;
  box-shadow: ${(p) => p.theme.boxShadow};
  &:hover {
    background-color: ${lighten(0.05, theme.brandColor.primary)};
  }

  ${media.mobile} {
    width: 40px;
    height: 40px;
  }
`;
