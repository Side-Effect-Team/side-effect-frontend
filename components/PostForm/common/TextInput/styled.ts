import styled from "styled-components";

export const Wrapper = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.25rem;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.lightGray};
`;
