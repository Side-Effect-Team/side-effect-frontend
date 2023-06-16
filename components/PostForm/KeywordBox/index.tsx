import { Wrapper, UlStyled, PStyled, TextContainer } from "./styled";

import Keyword from "@/postFormComps/Keyword";
import { useEffect } from "react";
import { SKILL_LIST_IN_FILTER } from "enum";

type searched = {
  name: string;
  value: string;
};

interface KeywordBoxProps {
  isOpen: boolean;
  searchKeyword: string;
  addTag: (value: string) => void;
  keyIdx: number;
  searchedList: searched[];
  setSearchedList: Function;
}

export const SKILL_LIST = SKILL_LIST_IN_FILTER.slice(1).sort((a, b) =>
  a.value.localeCompare(b.value) ? -1 : 1,
);

export default function KeywordBox({
  isOpen,
  searchKeyword,
  addTag,
  keyIdx,
  searchedList,
  setSearchedList,
}: KeywordBoxProps) {
  // 검색어에 따라 searchedList 조절
  useEffect(() => {
    if (searchKeyword === "") {
      setSearchedList(SKILL_LIST);
      return;
    }
    const filtered = SKILL_LIST.filter((skill) =>
      skill.value.includes(searchKeyword.toLowerCase()),
    );
    setSearchedList(filtered);
  }, [searchKeyword]);

  return (
    <Wrapper isOpen={isOpen}>
      {searchedList.length > 0 ? (
        <UlStyled>
          {searchedList.map((skill, idx) => {
            return (
              <Keyword
                key={skill.value}
                skill={skill}
                addTag={addTag}
                isActive={idx === keyIdx}
              />
            );
          })}
        </UlStyled>
      ) : (
        <TextContainer>
          <PStyled>
            검색 결과가 없습니다
            <br />
            새로운 기술 리스트가 곧 추가될 예정입니다
          </PStyled>
        </TextContainer>
      )}
    </Wrapper>
  );
}
