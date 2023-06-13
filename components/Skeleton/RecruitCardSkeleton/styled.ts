import { media } from "styles/media";
import styled, { keyframes } from "styled-components";

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

export const RecruitSkeletonWrapper = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 2px solid ${(p) => p.theme.cardBorder};
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(p) => p.theme.componentBgColor};
  position: relative;
  box-shadow: ${(p) => p.theme.cardBoxShadow};
  padding: 15px;
  ${media.mobile} {
    width: 95%;
    height: 150px;
  }
`;

export const Title = styled(SkeletonItem)`
  width: 150px;
  height: 20px;
  margin-top: 30px;
  margin-bottom: 50px;
  ${media.mobile} {
    width: 150px;
    margin-top: 0;
    margin-bottom: 15px;
  }
`;

export const TagWrapper = styled(SkeletonItem)`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  ${media.mobile} {
    height: 20px;
    margin-bottom: 10px;
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
  width: 120px;
  height: 20px;
  ${media.mobile} {
    width: 100px;
  }
`;
export const Comment = styled(SkeletonItem)`
  width: 80px;
  ${media.mobile} {
    width: 70px;
  }
`;
