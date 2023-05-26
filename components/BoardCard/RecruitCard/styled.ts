import { theme } from "@/styles/Theme";
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
  border: 1px solid lightgray;
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
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
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const IsRecruiting = styled.div<{ isRecruiting: boolean }>`
  font-size: 16px;
  font-weight: 700;
  color: ${(p) => (p.isRecruiting ? theme.brandColor.primary : "#d9d9d9")};
  /* color: ${(p) => (p.isRecruiting ? "#8696EE" : "#d9d9d9")}; */
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 30px;
  ${media.mobile} {
    -webkit-line-clamp: 1;
    margin-top: 7px;
    height: auto;
    width: 80%;
    font-size: 16px;
  }
`;

export const TagTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: gray;
  margin-bottom: 10px;
`;

export const TagWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 20px;
`;
