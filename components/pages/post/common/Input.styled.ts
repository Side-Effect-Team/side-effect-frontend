import styled from "styled-components";

interface LargeInputProps {
  placeholder?: string;
  size?: string;
}

export const InputContainer = styled.div`
  width: 100%;
`;

export const LargeInput = styled.input<LargeInputProps>`
  width: 100%;
  height: 100%;
  font-size: ${(p) => p.size ?? "1rem"};
  font-weight: 600;
  outline: none;
  border: none;

  ::placeholder {
    padding-left: 3px;
    color: ${(p) => p.theme.colors.gray};
  }

  :focus {
    border: 1.5px solid ${(p) => p.theme.colors.primary};
  }
`;
