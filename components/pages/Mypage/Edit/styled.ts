import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

export const ProfileWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
`;
export const ProfileImageWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
`;
export const ProfileContentsWrapper = styled.div`
  height: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const InputGuideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const GuideText = styled.p`
  font-size: 12px;
  padding-left: 10px;
`;
export const InputTemp = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 10px;
  :focus {
    border: 1px solid ${theme.brandColor.primary};
    outline: none;
  }
`;
