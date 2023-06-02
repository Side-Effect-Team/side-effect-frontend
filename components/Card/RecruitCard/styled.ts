import { media } from "@/styles/mediatest";
import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  min-width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 2px solid ${(p) => p.theme.cardBorder};
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(p) => p.theme.componentBgColor};
  box-shadow: ${(p) => p.theme.cardBoxShadow};
  position: relative;
  padding: 15px;
  cursor: pointer;
  :hover {
    transition: all 0.3s;
    transform: translateY(-0.5rem);
  }
  ${media.mobile} {
    width: 95%;
    height: 150px;
    min-height: 150px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
  }
`;
export const IsRecruiting = styled.div<{ isRecruiting: boolean }>`
  font-size: 16px;
  font-weight: 700;
  color: ${(p) =>
    p.isRecruiting ? p.theme.brandColor.primary : p.theme.colors.mediumGray};
  margin-top: 10px;
  margin-bottom: 15px;
  ${media.mobile} {
    display: none;
  }
`;

export const Title = styled.div`
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
  ${media.mobile} {
    width: calc(100% - 40px);
    height: auto;
    -webkit-line-clamp: 1;
    margin-top: 5px;
    margin-bottom: 7px;
    font-size: 16px;
  }
`;

export const TagCount = styled.div`
  ${media.mobile} {
    font-size: 12px;
    color: ${(p) => p.theme.colors.white};
    font-weight: 600;
    background-color: ${(p) => p.theme.brandColor.primary};
    border-radius: 50%;
    padding: 5px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
