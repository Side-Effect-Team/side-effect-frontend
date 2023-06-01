import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { media } from "@/styles/mediatest";

export const Container = styled.div`
  width: 300px;
  min-width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 2px solid ${(p) => p.theme.colors.mediumGray};
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.white};
  position: relative;

  cursor: pointer;
  /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25); */
  :hover {
    box-shadow: 1px 1px 5px rgba(21, 94, 239, 0.25);
    transform: translateY(-5px);
  }
  ${media.mobile} {
    width: 95%;
    height: 150px;
    min-height: 150px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const HeartWrapper = styled.div<{ isLike: boolean }>`
  background-color: ${({ isLike }) => (isLike ? "white" : "#d9d9d9")};
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
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

export const Header = styled.div<{ src?: string }>`
  width: 100%;
  height: 250px;
  background-image: ${(p) =>
    `url(${
      !p.src || p.src === "DefaultBackground.png"
        ? "/images/ProjectDefaultBackground.png"
        : `${process.env.NEXT_PUBLIC_API_URL}/free-boards/image/${p.src}`
    })`};

  // headerImage의 width에 맞추기 위해 아래 코드 추가했습니다
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${media.mobile} {
    width: 35%;
    height: 150px;
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: calc(100% - 250px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px;
  ${media.mobile} {
    width: 65%;
    height: 150px;
    padding: 10px;
    justify-content: space-between;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${media.mobile} {
    margin-top: 7px;
    height: auto;
    width: 80%;
    font-size: 16px;
  }
`;
export const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${media.mobile} {
    height: auto;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;
export const CreateAt = styled.div`
  font-size: 16px;
  color: ${(p) => p.theme.colors.gray};
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
export const HeartNotFillIcon = styled(AiOutlineHeart)`
  color: ${(p) => p.theme.colors.gray};
  font-size: 16px;
`;
export const CommentIcon = styled(AiOutlineMessage)`
  color: ${(p) => p.theme.colors.gray};
  font-size: 16px;
`;
export const FeedbackNum = styled.div`
  font-size: 16px;
  margin-right: 5px;
  color: ${(p) => p.theme.colors.gray};
`;
export const ViewIcon = styled(BsEye)`
  color: ${(p) => p.theme.colors.gray};
  font-size: 16px;
`;
