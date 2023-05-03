import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

export const TagWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;
export const Tag = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.brandColor.primary};
  background-color: ${theme.brandColor.skyBlue};
  margin-right: 10px;
  margin-bottom: 7px;
  padding: 0.5em 1em;
  border-radius: 15px;
`;
export const Text = styled.p`
  color: #667085;
  margin: 0;
  margin-bottom: 15px;
`;
