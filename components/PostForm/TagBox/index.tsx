import { useState } from "react";
import { InputBox, InputHeader } from "@/postFormComps/common/Form.styled";
import TagChip from "../TagChip";
import InputLabel from "components/PostForm/common/InputLabel";
import InputGuideText from "components/PostForm/common/InputGuideText";
import KeywordBox from "../KeywordBox";
import { TagsContainer, InputForm } from "./styled";

interface TagBoxProps {
  tags: string[];
  addTag: (value: string) => void;
  deleteTag: (value: string) => void;
}

export default function TagBox({ tags, deleteTag, addTag }: TagBoxProps) {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [keyIdx, setKeyIdx] = useState<number>(0);
  const [searchedList, setSearchedList] = useState([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") return;
    if (e.key === "ArrowDown" && keyIdx < searchedList.length - 1)
      setKeyIdx((prev) => prev + 1);
    if (e.key === "ArrowUp" && keyIdx > 0) setKeyIdx((prev) => prev - 1);
  };

  return (
    <InputBox>
      <InputHeader>
        <InputLabel idName="tags" label="태그" />
        <InputGuideText guideText="등록 가능한 태그를 검색하고 설정할 수 있습니다" />
      </InputHeader>

      <TagsContainer>
        {tags &&
          tags.map((keyword, idx) => (
            <TagChip key={idx} keyword={keyword} deleteTag={deleteTag} />
          ))}
      </TagsContainer>

      <InputForm
        placeholder="최대 5개의 태그를 설정할 수 있습니다"
        onFocus={() => setIsBoxOpen(true)}
        onBlur={() => setIsBoxOpen(false)}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div style={{ position: "relative" }}>
        <KeywordBox
          isOpen={isBoxOpen}
          searchKeyword={searchKeyword}
          addTag={addTag}
          keyIdx={keyIdx}
          searchedList={searchedList}
          setSearchedList={setSearchedList}
        />
      </div>
    </InputBox>
  );
}
