import styled from "styled-components";

export const InputBox = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PositionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelForm = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const InputForm = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.25rem;
  border-radius: 3px;
`;

export const TextareaForm = styled.textarea`
  padding: 0.25rem;
  height: 10rem;
  border: none;
  resize: none;
  border-radius: 3px;
`;

export const SubmitBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ErrorMsg = styled.span`
  margin-top: 5px;
  font-size: 0.85rem;
  color: ${(p) => p.theme.colors.danger};
`;

export const SelectStyled = styled.select`
  border: none;
  outline: none;
  padding: 0.25rem;
  border-radius: 3px;
`;

export const DirectBox = styled.div`
  width: 225px;
`;

export const MemberNeedsBox = styled.div`
  width: 95px;
`;
