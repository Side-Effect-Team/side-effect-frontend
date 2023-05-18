import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1rem 0;
`;

export const StyledHeader = styled.h2`
  margin-bottom: 0.75rem;
`;

export const Keyword = styled.span`
  padding: 0.5rem 0.25rem;
  display: inline-block;
  font-size: 1.25rem;
  transform: translateY(-45%);
`;

export const TagContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  width: 100%;
  min-height: 100px;
  background: ${(p) => p.theme.colors.white};
  border-radius: 5px;
  margin-bottom: 1rem;

  p {
    padding: 0.35rem;
  }
`;
