import { media } from "@/styles/mediatest";
import styled from "styled-components";

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
