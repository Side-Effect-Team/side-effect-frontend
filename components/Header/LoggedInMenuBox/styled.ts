import styled from "styled-components";
import { mediaQuery } from "@/styles/Media";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  button {
    svg {
      transform: scale(1.2);
    }
  }

  ${mediaQuery("mobile")`
    position: fixed;
    top: 1.2rem;
    right: 5rem;
    margin: auto;
  `};
`;

export const ImgContainer = styled.div`
  width: 35px;
  height: 35px;

  img {
    border-radius: 50%;
  }
`;
