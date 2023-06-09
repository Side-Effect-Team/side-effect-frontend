import styled from "styled-components";

interface OptionBtnProps {
  option: "edit" | "delete";
}

export const CommentWrapper = styled.div`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  :hover {
    background: ${(p) => p.theme.colors.lightGray};
    color: #000;

    textarea {
      color: #000;
    }
  }
`;

export const CommentColumn = styled.div`
  width: 100%;
`;

export const CommentContents = styled.textarea`
  color: ${(p) => p.theme.textColor};
  background: inherit;
  border-radius: 5px;
  outline: ${(p) => (p.readOnly ? "none" : "")};
  border: none;
  padding: 0.5rem;
  resize: none;
  width: 100%;
  height: auto;
  overflow-y: hidden;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const CommentEditBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  transform: translateX(0.5rem);
`;

export const BtnText = styled.span`
  font-size: 0.75rem;
`;

export const OptionBtn = styled.button<OptionBtnProps>`
  cursor: pointer;
  color: ${(p) => p.theme.colors.white};
  font-weight: 600;
  width: 3.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${(p) => p.option === "edit" && p.theme.colors.success};
  background: ${(p) => p.option === "delete" && p.theme.colors.danger};

  :hover {
    opacity: 0.75;
  }
`;
