import styled from "styled-components";

interface CommentNumberProps {
  color: string;
}

export const StyledHeader = styled.h2`
  margin-bottom: 0.75rem;
`;

export const CommentNumber = styled.span<CommentNumberProps>`
  color: ${(p) => p.color};
`;

export const CommentWrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
`;

export const CommentInputBox = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CommentSubmitBtn = styled.button`
  color: ${(p) => p.theme.colors.white};
  font-weight: 600;
  width: 80px;
  height: 95%;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transform: translateY(4%);
  background: ${(p) => p.theme.colors.primary};

  :hover {
    opacity: 0.8;
  }
`;

export const CommentInput = styled.textarea`
  margin-top: 0.5rem;
  border-radius: 5px;
  border: none;
  resize: none;
  width: 100%;
  height: 95%;
`;
