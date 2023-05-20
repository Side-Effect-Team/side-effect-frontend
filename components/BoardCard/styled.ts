import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { media } from "@/styles/mediatest";

export const Container = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid lightgray;
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
  position: relative;

  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  :hover {
    box-shadow: 1px 1px 5px rgba(21, 94, 239, 0.25);
  }
  ${media.mobile} {
    width: 95%;
    height: 150px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const HeartWrapper = styled.div<{ isLike: boolean }>`
  background-color: ${(p) => (p.isLike ? "white" : "#d9d9d9")};
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
`;
interface HeartProps {
  isLike: boolean;
  heartLike: boolean;
}
export const HeartFillIcon = styled(AiFillHeart)<HeartProps>`
  color: ${(p) => (p.isLike ? theme.brandColor.coral : "white")};
  font-size: 25px;
  font-weight: 600;
  animation: ${(p) => (p.heartLike ? "heart 0.7s ease-in-out" : "none")};
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
export const TestHeartNotFillIcon = styled(AiOutlineHeart)`
  color: ${theme.brandColor.coral};
  font-size: 25px;
  font-weight: 600;
  position: absolute;
  top: 10px;
  right: 10px;
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
    `url(${p.src || "/images/BoardDefaultBackground.png"})`};
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
  color: white;
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
  padding: 5%;
  ${media.mobile} {
    width: 65%;
    height: 150px;
    padding: 10px;
    justify-content: space-between;
  }
`;
export const TagWrapper = styled.div`
  width: 100%;
  max-height: 30%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  ${media.mobile} {
    flex-wrap: nowrap;
    margin: 10px 0;
  }
`;
export const Tag = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
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
export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${media.mobile} {
    -webkit-line-clamp: 1;
  }
`;
export const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #454545;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${media.mobile} {
    -webkit-line-clamp: 1;
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
  color: #454545;
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
  color: ${theme.colors.gray};
  font-size: 16px;
`;
export const CommentIcon = styled(AiOutlineMessage)`
  color: ${theme.colors.gray};
  font-size: 16px;
`;
export const FeedbackNum = styled.div`
  font-size: 16px;
  margin-right: 5px;
  color: #454545;
  color: ${theme.colors.gray};
`;
export const ViewIcon = styled(BsEye)`
  color: ${theme.colors.gray};
  font-size: 16px;
`;
