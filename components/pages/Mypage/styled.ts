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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${mediaQuery("mobile")`
  justify-content: center;
   `};
`;
