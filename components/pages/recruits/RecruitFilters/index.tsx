import { SKILL_LIST_IN_FILTER } from "enum";
import SelectBox from "components/SelectBox";
import { Wrapper, SelectBoxWrapper, SearchInput } from "./styled";

type SkillType = (typeof SKILL_LIST_IN_FILTER)[number]["value"];

interface RecruitFiltersProps {
  setSkill: (skill: SkillType) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
}

export default function RecruitFilters({
  setSkill,
  keyword,
  setKeyword,
}: RecruitFiltersProps) {
  return (
    <Wrapper>
      <SelectBoxWrapper>
        <SelectBox
          options={SKILL_LIST_IN_FILTER}
          setValue={setSkill}
          title={SKILL_LIST_IN_FILTER[0].name}
        />
      </SelectBoxWrapper>
      <SearchInput
        type="text"
        placeholder="검색할 내용을 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </Wrapper>
  );
}
