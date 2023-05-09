import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { mediaQuery } from "@/styles/Media";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  max-width: ${theme.sizes.desktop};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const TapWrapper = styled.div`
  width: 180px;
  height: auto;
  margin: 10px 0;
  padding: 20px;
  border: 2px solid ${theme.brandColor.lightGray};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
`;

export const TapMenu = styled.div<{ isActive: boolean }>`
  /* color: ${theme.brandColor.primary}; */
  font-size: 20px;
  font-weight: 600;
  margin: 7px 0;
  cursor: pointer;
  color: ${(p) => (p.isActive ? theme.brandColor.primary : "#d9d9d9")};
`;

export const ContentsWrapper = styled.div`
  padding: 1rem;
  width: calc(100% - 190px);
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 100px; */
  margin-left: auto;
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
