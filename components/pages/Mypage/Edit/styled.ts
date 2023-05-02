import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { mediaQuery } from "../../../../styles/Media";

export const ProfileWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
  ${mediaQuery("mobile")`
  flex-direction: column;

   `};
`;
export const ProfileImageWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
  ${mediaQuery("mobile")`
  margin-right: 0;
  margin-bottom: 20px
   `};
`;
export const ProfileContentsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${mediaQuery("mobile")`
  align-items: center;
   `};
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
export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 10px;
  border: 1px solid #d9d9d9;

  :focus {
    border: 1px solid ${theme.brandColor.primary};
    outline: none;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  /* height: 3rem; */
  padding: 10px;
  border: 1px solid #d9d9d9;
  :focus {
    border: 1px solid ${theme.brandColor.primary};
    outline: none;
  }
`;
