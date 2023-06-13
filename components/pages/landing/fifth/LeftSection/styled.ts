import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { media } from "@/styles/mediatest";
const slideUp = keyframes`
  0%{
    opacity: 0;
    transform: translateY(100%);
  }
  100%{
    opacity: 1;
    transform: translateY(0%);

  }
`;
export const ImageWrapper = styled.div`
  flex: 5;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid black;
`;
export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;

  animation: ${slideUp} 0.3s ease-in-out;
`;
