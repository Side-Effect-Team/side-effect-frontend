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
  border: 1px solid ${(p) => p.theme.colors.lightGray};
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.white};
  position: relative;
  padding: 15px;

  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  :hover {
    box-shadow: 1px 1px 5px rgba(21, 94, 239, 0.25);
    transform: translateY(-5px);
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
    width: 90%;
    -webkit-line-clamp: 1;
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 16px;
  }
`;
export const TagContainer = styled.div`
  ${media.mobile} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }
`;
export const TagTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.gray};
  margin-bottom: 10px;
  ${media.mobile} {
    margin-bottom: 0px;
    margin-right: 10px;
  }
`;

export const TagWrapper = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 20px;
  overflow: hidden;
  ${media.mobile} {
    width: calc(100% - 100px);
    height: 25px;
    overflow: hidden;
    margin-bottom: 5px;
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
