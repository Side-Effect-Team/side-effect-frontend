import styled from "styled-components";
import { theme } from "@/styles/Theme";

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${theme.brandColor.lightGray};
`;
export const InfoTitle = styled.p`
  min-width: 30%;
  color: #667085;
  font-weight: 600;
`;
export const InfoContent = styled.p`
  font-weight: 600;
`;
export const InfoContentLink = styled.a`
  font-weight: 600;
  cursor: pointer;
`;
export const Text = styled.p`
  color: #667085;
  margin: 0;
`;
