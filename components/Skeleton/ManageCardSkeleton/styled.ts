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
export const SkeletonItem = styled.div`
  background-color: ${(p) => p.theme.componentBgColor};
  height: 20px;
  border-radius: 15px;
  position: relative;
  box-shadow: ${(p) => p.theme.boxShadow};

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
export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;
export const SkeletonCardWrapper = styled.div`
  display: flex;
  padding: 20px 10px;
  border-radius: 15px;
  align-items: center;
  gap: 5px;
  box-shadow: ${(p) => p.theme.boxShadow};
  background-color: ${(p) => p.theme.componentBgColor};
  ${media.mobile} {
    flex-direction: column;
  }
`;
export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
`;
export const ProfileImage = styled(SkeletonItem)`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 25%;
  overflow: hidden;
`;
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Nickname = styled(SkeletonItem)`
  width: 100px;
`;
export const Info = styled(SkeletonItem)`
  width: 50px;
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
`;
export const ButtonSkeleton = styled(SkeletonItem)`
  width: 50px;
  height: 1.5rem;
`;
