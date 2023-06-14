import styled from "styled-components";

export const TextareaStyled = styled.textarea`
  padding: 0.25rem;
  height: 10rem;
  border: none;
  resize: none;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.lightGray};
`;
