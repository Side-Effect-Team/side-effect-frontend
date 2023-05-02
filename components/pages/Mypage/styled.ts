import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { mediaQuery } from "../../../styles/Media";

export const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: ${(p) => p.theme.sizes.desktop};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 100px;
`;
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

export const NickName = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;
export const Text = styled.p`
  color: #667085;
  margin: 0;
  margin-bottom: 15px;
`;
export const ContentsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;
export const ContentLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 15px;
`;
export const ContentNum = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
  color: #667085;
`;
export const ContentTitle = styled.p`
  font-weight: 600;
  margin: 0;
  color: #667085;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 30%;
  margin-bottom: 50px;
`;
export const SectionHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SectionTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-right: 15px;
`;
export const Border = styled.div`
  /* width: 100%; */
  flex: 1;
  border-bottom: 2px solid ${theme.brandColor.lightGray};
`;
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

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${theme.brandColor.lightGray};
`;
export const InfoTitle = styled.p`
  width: 30%;
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
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${mediaQuery("mobile")`
  justify-content: center;
   `};
`;
