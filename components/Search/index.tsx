import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { SearchDiv, StyledInput } from "./styled";
import axios from "axios";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface SearchProps extends InputProps {
  setData: Dispatch<SetStateAction<any>>;
  category: string;
}

export default function Search({ setData, category, ...rest }: SearchProps) {
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const fetchRecruits = async () => {
    try {
      const result = await axios.get(
        `http://54.64.103.42:8080/api/recruit-board/scroll?&size=10&keyword=${keyword}`,
      );
      setData(result.data);
    } catch (error) {
      setData(null);
      console.log(error);
    }
  };
  const fetchProjects = async () => {
    try {
      const result = await axios.get(
        `http://http://http://54.64.103.42:8080/api/free-boards/search?&size=10&keyWord=${keyword}`,
      );
      setData(result.data);
    } catch (error) {
      setData(null);
      console.log(error);
    }
  };

  useEffect(() => {
    if (category === "recruits") {
      fetchRecruits();
    } else {
      fetchProjects();
    }
  }, [keyword]);

  return (
    <SearchDiv>
      <StyledInput
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={onChangeKeyword}
        {...rest}
      />
    </SearchDiv>
  );
}

// 쓰는 방법
// 데이터 받아주시고 아래의 양식처럼 props 보내주시면 됩니다.
// <Search category="recruits" setData={setData} /> or <Search category="projects" setData={setData} />
