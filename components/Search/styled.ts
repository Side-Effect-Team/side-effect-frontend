import { theme } from "@/styles/Theme";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

export const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${theme.colors.gray};
  border-radius: 5px;
  padding: 0 10px;
  :focus-within {
    border: 1px solid ${theme.brandColor.primary};
  }
`;
export const StyledInput = styled.input`
  width: 200px;
  border: none;
  outline: none;
  :focus {
    outline: none;
  }
`;
export const SearchBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 20px;
`;
