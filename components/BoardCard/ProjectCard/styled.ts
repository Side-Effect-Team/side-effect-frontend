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
  border: 1px solid ${(p) => p.theme.colors.lightGray};
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.white};
  position: relative;

  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
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

interface HeaderProps {
  src?: string;
  category?: string;
}
export const Header = styled.div<HeaderProps>`
  width: 100%;
  height: ${(p) => (p.category === "projects" ? "250px" : "150px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(p) =>
    p.category === "projects"
      ? `url(${
          p.src
            ? process.env.NEXT_PUBLIC_API_URL! + "/free-boards/image/" + p.src
            : "/images/ProjectDefaultBackground.png"
        })`
      : `url(${
          p.src
            ? process.env.NEXT_PUBLIC_API_URL! + "/recruit-board/image/" + p.src
            : "/images/BoardDefaultBackground.png"
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

export const ProjectName = styled.div`
  width: 80%;
  color: ${(p) => p.theme.colors.white};
  font-size: 24px;
  font-weight: 600;
  word-break: keep-all;
  text-align: center;
  line-height: 2.5rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;
export const ContentsWrapper = styled.div`
  width: 100%;
  height: calc(100% - 150px);
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
  height: 25%;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${media.mobile} {
    -webkit-line-clamp: 1;
    margin-top: 7px;
    height: auto;
    width: 80%;
    font-size: 16px;
  }
`;
export const Content = styled.div`
  height: 20%;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${media.mobile} {
    -webkit-line-clamp: 1;
    height: auto;
  }
`;
export const TagWrapper = styled.div`
  width: 100%;
  height: 30%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  ${media.mobile} {
    flex-wrap: nowrap;
    margin-top: 5px;
  }
`;
export const Tag = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.white};
  background-color: black;
  margin-right: 10px;
  margin-bottom: 7px;
  padding: 0.3em 1em;
  border-radius: 15px;
  ${media.mobile} {
    margin-bottom: 0;
    font-size: 12px;
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
