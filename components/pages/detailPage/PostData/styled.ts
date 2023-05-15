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

export const OptionModal = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  background: aquamarine;
  z-index: 2;
  left: -50px;
`;
