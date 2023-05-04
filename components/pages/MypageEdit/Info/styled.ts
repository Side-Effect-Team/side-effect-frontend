import styled from "styled-components";
import { theme } from "@/styles/Theme";

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 10px;
  border: 1px solid #d9d9d9;

  :focus {
    border: 1px solid ${theme.brandColor.primary};
    outline: none;
  }
`;
