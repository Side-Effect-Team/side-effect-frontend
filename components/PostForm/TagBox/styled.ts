import styled from "styled-components";

export const TagWrapper = styled.div`
  border: none;
  background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
  border-radius: 18px;
  box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
    0 1px 2px 1px rgba(30, 35, 90, 0.4);
  color: #969faf;
  height: 1.75rem;
  padding: 0.6rem;
  margin: 0 0.6rem;
  display: inline-block;
  font-weight: bold;
  user-select: none;
  font-size: 0.85rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-25%);
  cursor: pointer;
`;

export const TagsContainer = styled.div`
  margin-bottom: 0.75rem;
`;

export const InputForm = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.25rem;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.lightGray};
`;
