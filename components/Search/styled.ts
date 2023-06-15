import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import { media } from "styles/media";
export const SearchDiv = styled.div`
  display: flex;
  flex: 5;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(p) => p.theme.colors.gray};
  border-radius: 5px;
  padding: 0 10px;
  :focus-within {
    border: 1px solid ${(p) => p.theme.brandColor.primary};
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: ${(p) => p.theme.mainBackGround};
  color: ${(p) => p.theme.textColor};
  :focus {
    outline: none;
  }
  ${media.custom(425)} {
    font-size: small;
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
