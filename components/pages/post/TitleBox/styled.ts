import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const InputStyled = styled.input`
  font-size: 1.25rem;
  padding: 0.25rem;

  ::placeholder {
    padding: 0.25rem;
  }
`;
