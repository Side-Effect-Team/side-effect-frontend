import { useState } from "react";
import { SKILL_LIST_IN_FILTER } from "enum";
import { Wrapper, ContentsHeader } from "./styled";
import RecruitFilters from "@/pageComponents/recruits/RecruitFilters";
import RecruitList from "components/pages/recruits/RecruitList";
import { useDebounce } from "@/hooks/common/useDebounce";

type SkillType = (typeof SKILL_LIST_IN_FILTER)[number]["value"];

export default function RecruitContents() {
  const [skill, setSkill] = useState<SkillType>("");
  const [keyword, setKeyword] = useState<string>("");
  const debouncedKeyword = useDebounce(keyword, 500);

  return (
    <Wrapper>
      <ContentsHeader>
        <h2>팀원 모집 게시판</h2>
        <RecruitFilters
          setSkill={setSkill}
          keyword={keyword}
          setKeyword={setKeyword}
        />
      </ContentsHeader>
      <RecruitList skill={skill} keyword={debouncedKeyword} />
    </Wrapper>
  );
}
