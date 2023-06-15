import styled from "styled-components";

export const PositionBoxWapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 3.5rem;
  align-items: center;
  gap: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SelectStyled = styled.select`
  border: none;
  outline: none;
  padding: 0.25rem;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.lightGray};
`;

export const DirectBox = styled.div`
  width: 160px;
`;

export const MemberNeedsBox = styled.div`
  width: 45px;
`;

export const InputForm = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.25rem;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.lightGray};
`;
