import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 0.25rem 0.6rem;
  border-radius: 5px;

  :hover {
    background: ${(p) => p.theme.grayToDark};
  }
`;

export const Bar = styled.div`
  background: ${(p) => p.theme.textColor};
  width: 100%;
  height: 2px;
  border-radius: 1px;
`;
