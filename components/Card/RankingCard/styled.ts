import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

export const HeartIcon = styled(AiFillHeart)`
  color: ${(p) => p.theme.brandColor.coral};
`;

export const StyledLink = styled(Link)`
  max-width: 300px;
  min-height: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 35px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:hover {
    & span {
      transition: all 0.3s;
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
    }
  }
`;
export const StyledImage = styled(Image)`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 35px;
  &:hover {
    transition: all 0.5s;
    transform: scale(1.1);
  }
`;
export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: absolute;
  padding: 10px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  border-radius: 35px;
  z-index: 10;
`;
export const GlassOverlay = styled.div`
  position: absolute;
  height: 100%;
  max-height: 70px;
  width: 100%;
  bottom: 0;
  z-index: 0;
  background: rgba(250, 250, 250, 0.25);
  backdrop-filter: blur(8px);
  /* border-radius: 35px; */
  box-shadow: ${(p) => p.theme.boxShadow};
  transition: all 0.3s;
`;

export const LikeNum = styled.span`
  display: flex;
  gap: 5px;
  font-size: medium;
  font-weight: bold;
  text-shadow: 0 0.5px 3px rgba(0, 0, 0, 0.6);
  color: #ffffff;
`;
export const Title = styled.span`
  font-size: larger;
  font-weight: bold;
  text-shadow: 0 0.5px 3px rgba(0, 0, 0, 0.6);
  color: #ffffff;
`;
