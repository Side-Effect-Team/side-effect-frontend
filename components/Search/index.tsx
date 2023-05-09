import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { SearchDiv, StyledInput } from "./styled";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface SearchProps extends InputProps {
  setKeyword: Dispatch<SetStateAction<string>>;
}

export default function Search({ setKeyword }: SearchProps) {
  const [searchKeyword, setSearchKeyword] = useState("");

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.currentTarget.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setKeyword(searchKeyword);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchKeyword]);

  return (
    <SearchDiv>
      <StyledInput
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={onChangeKeyword}
      />
    </SearchDiv>
  );
}

// 쓰는 방법
// const [keyword, setKeyword] = useState(""); 페이지에서 선언 후 아래 양식 처럼 props 보내주시면 됩니다.
// <Search setKeyword={setKeyword} />
