import styled from "styled-components";

export const PartInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MemberHeader = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;

  span:first-child {
    margin-right: 100px;
  }
`;

export const AddBtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PositionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PositionContainer = styled.div``;

export const NeedsContainer = styled.div`
  width: ${(p) => p.theme.width.needsInput};

  input {
    width: 100%;
    text-align: center;
  }
`;
