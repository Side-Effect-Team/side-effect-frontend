import styled from "styled-components";
import { media } from "@/styles/mediatest";
import { theme } from "@/styles/Theme";
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
  cursor: pointer;
  ${media.mobile} {
    width: 40px;
    height: 40px;
  }
`;
