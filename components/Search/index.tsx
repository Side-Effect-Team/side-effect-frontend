import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { SearchBtn, SearchDiv, SearchIcon, StyledInput } from "./styled";
import { BoardCardProps } from "../BoardCard";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
interface SearchProps extends InputProps {
  defaultData: BoardCardProps[];
  handleSearch: (handleSearch: BoardCardProps[]) => void;
}

export default function Search({
  defaultData,
  handleSearch,
  ...rest
}: SearchProps) {
  const [keyword, setKeyword] = useState("");

  const onClickSearch = () => {
    const filteredData = defaultData.filter(
      (data) =>
        data.title.toLowerCase().includes(keyword.toLowerCase()) ||
        data.content.toLowerCase().includes(keyword.toLowerCase()) ||
        data.tags?.some((tag) =>
          tag.toLowerCase().includes(keyword.toLowerCase()),
        ),
    );
    handleSearch(filteredData);
  };
  return (
    <SearchDiv>
      <StyledInput
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setKeyword(e.currentTarget.value)
        }
        {...rest}
      />
      <SearchBtn onClick={onClickSearch}>
        <SearchIcon />
      </SearchBtn>
    </SearchDiv>
  );
}
