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
export const TagWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  &:focus-within {
    border-color: ${theme.brandColor.primary};
  }
`;
export const Tag = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.brandColor.primary};
  background-color: ${theme.brandColor.skyBlue};
  margin: 5px;
  padding: 0.5em 1em;
  border-radius: 15px;
`;

export const DeleteTag = styled.button`
  color: ${theme.brandColor.primary};
  background: none;
  border: none;
  font-weight: 700;
  cursor: pointer;
`;
export const TagInput = styled.input`
  border: none;
  outline: none;
  margin: 5px;
`;
