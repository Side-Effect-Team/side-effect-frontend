import styled from "styled-components";

export const InputBox = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GuideWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 1rem;
    font-size: 0.85rem;
    transform: translateY(50%);
  }
`;

export const PositionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelForm = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
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
  gap: 1rem;
`;

export const ErrorMsg = styled.span`
  margin-top: 5px;
  font-size: 0.85rem;
  color: ${(p) => p.theme.colors.danger};
`;

export const ImageBox = styled.div`
  p {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.75);
  }
`;
