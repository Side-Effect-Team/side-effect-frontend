import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.15rem;
  width: 75px;
  height: 75px;
  position: absolute;
  background: ${(p) => p.theme.colors.white};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.2rem;
  border: 0.5px solid black;
  border-radius: 5px;
`;

export const OptionBtn = styled.button`
  width: 100%;
  height: 30px;
  appearance: none;
  background: ${(p) => p.theme.mainBackGround};
  color: ${(p) => p.theme.textColor};
  border: none;
  cursor: pointer;

  :hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: translateY(-10%);

  p {
    margin-left: 0.25rem;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
