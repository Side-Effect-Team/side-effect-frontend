import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { media } from "@/styles/mediatest";
export const StyledLink = styled(Link)`
  max-width: 300px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  &:hover {
    span {
      transition: all 0.3s;
      filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
    }
  }
`;
export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.2);
  }
`;

export const Title = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: xx-large;
  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
  color: ${(p) => p.theme.colors.white};
`;
