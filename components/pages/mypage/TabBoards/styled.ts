import { theme } from "@/styles/Theme";
import { media } from "@/styles/mediatest";
import styled from "styled-components";

export const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 100px;
  ${media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
export const NullMessage = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #d9d9d9;
`;
export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  margin-bottom: 15px;
`;
export const FilterMenu = styled.div<{ isActive: boolean }>`
  font-size: 16px;
  /* color: #d9d9d9; */
  color: ${(p) => (p.isActive ? "black" : "#d9d9d9")};
  cursor: pointer;
`;
