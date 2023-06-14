import styled, { keyframes } from "styled-components";
import { media } from "styles/media";

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
  background-color: ${(p) => p.theme.componentBgColor};
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
  margin-bottom: 1rem;
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
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(p) => p.theme.mainBackGround};
  border: 2px solid ${(p) => p.theme.cardBorder};
  position: relative;
  box-shadow: ${(p) => p.theme.cardBoxShadow};

  ${media.mobile} {
    width: 95%;
    max-height: 150px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const Header = styled(SkeletonItem)`
  width: 100%;
  height: 250px;
  border-radius: 0;

  &:before {
    border-radius: 0;
  }
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
  padding: 5%;
  background-color: ${(p) => p.theme.componentBgColor};

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
  ${media.mobile} {
    width: 100px;
  }
`;
export const Content = styled(SkeletonItem)`
  margin-bottom: 15px;
  width: 200px;
  height: 20px;
  ${media.mobile} {
    width: 150px;
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
export const CreateAt = styled(SkeletonItem)`
  margin-bottom: 15px;
  width: 120px;
  height: 20px;
  ${media.mobile} {
    width: 100px;
  }
`;
export const Comment = styled(SkeletonItem)`
  margin-bottom: 15px;
  width: 80px;
  ${media.mobile} {
    width: 70px;
  }
`;
