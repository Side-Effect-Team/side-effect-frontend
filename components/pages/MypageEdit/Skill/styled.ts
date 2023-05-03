import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

export const TagWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
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
