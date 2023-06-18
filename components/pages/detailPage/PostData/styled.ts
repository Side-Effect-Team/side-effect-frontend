import styled from "styled-components";

export const PostTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
    background: ${(p) => p.theme.grayToDark};
    border-radius: 5px;
  }

  svg {
    color: ${(p) => p.theme.textColor};
  }
`;
