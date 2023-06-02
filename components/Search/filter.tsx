import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";
import { SearchBtn, SearchDiv, SearchIcon, StyledInput } from "./styled";
import { BoardCardProps } from "../Card/ProjectCard";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
interface FilterProps extends InputProps {
  defaultData: BoardCardProps[];
  handleSearch: (handleSearch: BoardCardProps[]) => void;
}

export default function Filter({
  defaultData,
  handleSearch,
  ...rest
}: FilterProps) {
  const [keyword, setKeyword] = useState("");

  const onClickSearch = () => {
    const filteredData = defaultData.filter(
      (data) =>
        data.title.toLowerCase().includes(keyword.toLowerCase()) ||
        data.subTitle.toLowerCase().includes(keyword.toLowerCase()) ||
        data.tags?.some((tag) =>
          tag.toLowerCase().includes(keyword.toLowerCase()),
        ),
    );
    sessionStorage.setItem("searchKeyword", keyword);
    handleSearch(filteredData);
  };

  const [savedKeyword, setSavedKeyword] = useState("");
  useEffect(() => {
    const savedKeyword = window.sessionStorage.getItem("searchKeyword");
    if (savedKeyword) {
      const filteredData = defaultData.filter(
        (data) =>
          data.title.toLowerCase().includes(savedKeyword.toLowerCase()) ||
          data.subTitle.toLowerCase().includes(savedKeyword.toLowerCase()) ||
          data.tags?.some((tag) =>
            tag.toLowerCase().includes(savedKeyword.toLowerCase()),
          ),
      );
      handleSearch(filteredData);
      setSavedKeyword(savedKeyword);
    }
  }, []);

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
    // 검색창이 비워졌을 때, defaultData로 다시 매핑
    if (!e.currentTarget.value) {
      handleSearch(defaultData);
    }
  };
  return (
    <SearchDiv>
      <StyledInput
        type="text"
        placeholder="검색어를 입력하세요."
        defaultValue={savedKeyword}
        onChange={onChangeKeyword}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClickSearch();
          }
        }}
        {...rest}
      />
      <SearchBtn onClick={onClickSearch}>
        <SearchIcon />
      </SearchBtn>
    </SearchDiv>
  );
}
