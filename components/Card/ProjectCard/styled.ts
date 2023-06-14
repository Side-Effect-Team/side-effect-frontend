import styled from "styled-components";
import { media } from "styles/media";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

export const Container = styled.div`
  width: 300px;
  min-width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 2px solid ${(p) => p.theme.cardBorder};
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: ${(p) => p.theme.cardBoxShadow};
  cursor: pointer;
  :hover {
    transition: all 0.3s;
    transform: translateY(-0.5rem);
  }
  ${media.mobile} {
    width: 95%;
    height: 170px;
    min-height: 170px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid ${(p) => p.theme.grayToDark};
    padding: 10px 0;
    background-color: ${(p) => p.theme.mainBackGround};
    box-shadow: none;

    :hover {
      transition: none;
      transform: none;
    }
  }
`;

export const Header = styled.div<{ src?: string }>`
  width: 100%;
  height: 250px;
  background-image: ${(p) =>
    `url(${
      !p.src
        ? "/images/ProjectBackground.png"
        : `${process.env.NEXT_PUBLIC_API_URL}/free-boards/image/${p.src}`
    })`};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.mobile} {
    width: 150px;
    min-width: 150px;
    height: 150px;
    border-radius: 15px;
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
  background-color: ${(p) => p.theme.componentBgColor};

  ${media.mobile} {
    width: calc(100% - 150px);
    height: 150px;
    justify-content: space-between;
    padding: 5px 15px;
    background-color: ${(p) => p.theme.mainBackGround};
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;

  ${media.mobile} {
    margin-top: 5px;
    height: auto;
    width: calc(100% - 45px);
    font-size: 18px;
    -webkit-line-clamp: 2;
    line-height: 140%;
  }
`;
export const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  color: ${(p) => p.theme.textColor};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${media.mobile} {
    font-size: 14px;
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
  ${media.mobile} {
    flex-direction: column;
    align-items: flex-end;
  }
`;
export const CreateAt = styled.div`
  font-size: 16px;
  margin-top: 2px;
  color: ${(p) => p.theme.colors.gray};
  ${media.mobile} {
    font-size: 14px;
    margin-bottom: 3px;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;
export const HeartNotFillIcon = styled(AiOutlineHeart)`
  color: ${(p) => p.theme.colors.gray};
  font-size: 16px;
  ${media.mobile} {
    font-size: 14px;
  }
`;
export const CommentIcon = styled(AiOutlineMessage)`
  color: ${(p) => p.theme.colors.gray};
  font-size: 16px;
  ${media.mobile} {
    font-size: 14px;
  }
`;
export const Num = styled.div`
  font-size: 16px;
  margin-right: 5px;
  margin-top: 2px;
  color: ${(p) => p.theme.colors.gray};
  ${media.mobile} {
    font-size: 14px;
  }
`;
export const ViewIcon = styled(BsEye)`
  color: ${(p) => p.theme.colors.gray};
  font-size: 16px;
  ${media.mobile} {
    font-size: 14px;
  }
`;
