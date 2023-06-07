import styled from "styled-components";

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
`;

export const ImgContainer = styled.div`
  width: 35px;
  height: 35px;

  img {
    border-radius: 50%;
  }
`;
