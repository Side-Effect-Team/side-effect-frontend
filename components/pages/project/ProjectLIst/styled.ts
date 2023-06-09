import styled from "styled-components";
import { media } from "@/styles/mediatest";
export const ProjectListWrapper = styled.main`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;
  margin-bottom: 1rem;
  ${media.mobile} {
    display: flex;
    flex-direction: column;
    // 추가
    gap: 0;
  }
`;
