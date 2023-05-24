import styled, { keyframes } from "styled-components";
import { media } from "@/styles/mediatest";
import { theme } from "../../styles/Theme";

const loading = keyframes`
 0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.5);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
`;
const SkeletonItem = styled.div`
  background-color: ${theme.brandColor.lightGray};
  height: 20px;
  border-radius: 15px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${loading} 1.5s infinite ease-in-out;
    border-radius: 15px;
  }
`;
export const SkelectonContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;
  ${media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
export const SkeletonCardWrapper = styled.div`
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
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  ${media.mobile} {
    width: 95%;
    min-height: 150px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const Header = styled(SkeletonItem)`
  width: 100%;
  height: 150px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  &:before {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  ${media.mobile} {
    width: 35%;
    height: 150px;
  }
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
export const Title = styled(SkeletonItem)`
  margin-bottom: 15px;
  width: 150px;
  height: 20px;
`;
export const Content = styled(SkeletonItem)`
  margin-bottom: 15px;
  width: 200px;
  height: 20px;
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;
export const CreateAt = styled(SkeletonItem)`
  margin-bottom: 15px;
  width: 120px;
  height: 20px;
`;
export const Comment = styled(SkeletonItem)`
  margin-bottom: 15px;
  width: 80px;
`;
