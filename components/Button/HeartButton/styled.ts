import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

export const HeartWrapper = styled.div<{ isLike: boolean }>`
  background-color: ${(p) => (p.isLike ? "white" : p.theme.colors.mediumGray)};
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  box-shadow: 0.2px 0.2px 2px rgba(0, 0, 0, 0.5);
`;
interface HeartProps {
  islike: string;
  heartlike: string;
}
export const HeartFillIcon = styled(AiFillHeart)<HeartProps>`
  color: ${(p) => (p.islike === "true" ? p.theme.brandColor.coral : "white")};
  font-size: 25px;
  font-weight: 600;
  animation: ${(p) =>
    p.heartlike === "true" ? "heart 0.7s ease-in-out" : "none"};

  @keyframes heart {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
