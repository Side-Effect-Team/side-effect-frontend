import styled from "styled-components";

interface SectionTitle {
  color?: string;
}

export const PostTitleStyled = styled.h2`
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.div<SectionTitle>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h2 {
    font-size: 1.2rem;
    white-space: nowrap;
  }

  div {
    margin-left: 0.75rem;
    width: 100%;
    border-bottom: 3px solid ${(p) => p.color ?? "#000"};
    transform: translateY(-30%);
  }
`;
