import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { media } from "@/styles/mediatest";

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
  ${media.mobile} {
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid ${theme.brandColor.lightGray};
    background-color: white;
    z-index: 10;
  }
`;

export const TapMenu = styled.div<{ isActive: boolean }>`
  font-size: 20px;
  font-weight: 600;
  margin: 7px 0;
  cursor: pointer;
  color: ${(p) => (p.isActive ? theme.brandColor.primary : "#d9d9d9")};
  ${media.mobile} {
    font-size: 16px;
  }
`;

export const ContentsWrapper = styled.div`
  padding: 1rem;
  width: calc(100% - 190px);
  margin-left: auto;
  ${media.mobile} {
    width: 100%;
    margin-top: 50px;
    padding: 0 1rem;
  }
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
  ${media.mobile} {
    display: none;
  }
`;

export const SectionTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-right: 15px;
`;

export const Border = styled.div`
  flex: 1;
  border-bottom: 2px solid ${theme.brandColor.lightGray};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 15px;
  margin-bottom: 100px;
  ${media.mobile} {
    justify-content: center;
  }
`;
