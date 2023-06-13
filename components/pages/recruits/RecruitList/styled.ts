import styled from "styled-components";
import { mediaQuery } from "@/styles/Media";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;

  ${mediaQuery("mobile")`
  display: flex;
  flex-direction: column;
  gap: 0
`}
`;

export const NoListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
