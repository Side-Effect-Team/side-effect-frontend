import styled from "styled-components";

interface TextareaStyledProps {
  idName: string;
}

export const TextareaStyled = styled.textarea<TextareaStyledProps>`
  padding: 0.25rem;
  height: 10rem;
  border: none;
  resize: none;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.lightGray};
`;
