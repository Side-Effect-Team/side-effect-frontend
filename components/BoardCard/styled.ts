import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

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
  cursor: pointer;
  filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.25));
  :hover {
    filter: drop-shadow(1px 1px 5px rgba(21, 94, 239, 0.25));
  }
`;
interface HeaderProps {
  src?: string;
  category?: string;
}
export const Header = styled.div<HeaderProps>`
  width: 100%;
  /* height: 150px; */
  height: ${(p) => (p.category === "projects" ? "250px" : "150px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(p) =>
    `url(${p.src || "/images/BoardDefaultBackground.png"})`};
  background-size: cover;
`;
export const HeaderTitle = styled.div`
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
  margin-bottom: 15px;
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
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`;
export const Content = styled.div`
  /* height: 40%; */
  font-size: 16px;
  font-weight: 400;
  color: #454545;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
export const ButtonDiv = styled.button`
  background: none;
  border: none;
  margin: 0 5px;
  cursor: pointer;
`;
export const HeartNotFillIcon = styled(AiOutlineHeart)`
  color: ${theme.brandColor.coral};
  font-size: 20px;
`;
export const HeartFillIcon = styled(AiFillHeart)`
  color: ${theme.brandColor.coral};
  font-size: 20px;
`;
export const CommentIcon = styled(AiOutlineMessage)`
  color: ${theme.brandColor.coral};
  font-size: 20px;
`;
export const FeedbackNum = styled.div`
  font-size: 16px;
  color: #454545;
`;
