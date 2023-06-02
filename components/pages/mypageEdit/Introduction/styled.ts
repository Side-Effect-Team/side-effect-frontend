import styled from "styled-components";
import { theme } from "@/styles/Theme";

export const ProfileWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
`;
export const ProfileImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 30px;
`;
export const IntroductionTitle = styled.div`
  width: 100px;
`;
export const IntroductionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const FiledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ProfileImageWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProfileContentsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  color: ${(p) => p.theme.textColor};
  border: 1px solid ${(p) => p.theme.colors.mediumGray};
  background-color: ${(p) => p.theme.mainBackGround};
  border-radius: 10px;
  resize: none;
  :focus {
    border: 1px solid ${(p) => p.theme.brandColor.primary};
    outline: none;
  }
`;
export const InputGuideWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const GuideText = styled.p`
  font-size: 12px;
  padding: 0 10px;
`;
export const ErrorMessage = styled.div`
  font-size: 12px;
  padding: 10px;
  color: ${(p) => p.theme.colors.danger};
`;
