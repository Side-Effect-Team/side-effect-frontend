import styled from "styled-components";

export const PostTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProfile = styled.div`
  width: 2.1rem;
  height: 2.1rem;
  background: ${(p) => p.theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Column = styled.div`
  margin: 0 1rem;
  width: 1.75px;
  height: 1.85rem;
  background: ${(p) => p.theme.colors.gray};
`;

export const SpanStyled = styled.span`
  font-weight: 600;
`;

export const OptionBox = styled.button`
  margin-left: 1rem;
  background: inherit;
  border: none;

  :hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
`;

export const OptionPopupWrapper = styled.div`
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
  background: transparent;
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
