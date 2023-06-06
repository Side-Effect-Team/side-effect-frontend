import styled from "styled-components";
import { media } from "@/styles/mediatest";

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
    height: 150px;
    min-height: 150px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
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
    /* width: 35%; */
    width: 200px;
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
  background-color: ${(p) => p.theme.componentBgColor};
  ${media.mobile} {
    width: 65%;
    height: 150px;
    justify-content: space-between;
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
    width: calc(100% - 40px);
    font-size: 16px;
    -webkit-line-clamp: 2;
    line-height: 140%;
    margin-bottom: 7px;
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
    height: auto;
  }
`;
