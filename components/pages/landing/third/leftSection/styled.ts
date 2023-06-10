import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/mediatest";
export const ImageWrapper = styled.div`
  flex: 4;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
`;
export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
