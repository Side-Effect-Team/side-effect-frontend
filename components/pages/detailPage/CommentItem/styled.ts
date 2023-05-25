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
  }
`;

export const CommentContents = styled.textarea`
  background: inherit;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 0.5rem;
  resize: none;
  min-width: 300px;
  width: 80vw;
  height: 100%;
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
  background: aquamarine;
  transform: translateX(0.5rem);
`;

export const BtnText = styled.span`
  font-size: 0.75rem;
`;

export const OptionBtn = styled.button<OptionBtnProps>`
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
