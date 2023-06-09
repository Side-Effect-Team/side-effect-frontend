import { KeyboardEvent, MouseEvent } from "react";
import { TiTimes } from "react-icons/ti";
import { TagWrapper, Container, KeywordWrapper, TagsContainer } from "./styled";
import {
  GuideWrapper,
  InputBox,
  InputForm,
  LabelForm,
} from "@/postComps/common/PostForm.styled";

interface TagBoxProps {
  tags: string[];
  addTag: (e: KeyboardEvent<HTMLInputElement>) => void;
  deleteTag: (e: MouseEvent) => void;
}

interface TagProps {
  keyword: string;
  deleteTag: (e: MouseEvent) => void;
}

export default function TagBox({ tags, deleteTag, addTag }: TagBoxProps) {
  return (
    <InputBox>
      <GuideWrapper>
        <LabelForm>태그 설정</LabelForm>
        <p>엔터 키를 눌러 태그를 설정할 수 있습니다</p>
      </GuideWrapper>

      <TagsContainer>
        {tags &&
          tags.map((keyword, idx) => (
            <Tag key={idx} keyword={keyword} deleteTag={deleteTag} />
          ))}
      </TagsContainer>
      <InputForm
        onKeyDown={addTag}
        placeholder="최대 5개의 태그를 설정할 수 있습니다"
      />
    </InputBox>
  );
}

function Tag({ keyword, deleteTag }: TagProps) {
  return (
    <TagWrapper>
      <Container>
        <KeywordWrapper onClick={deleteTag}>
          {keyword}
          <TiTimes size={15} />
        </KeywordWrapper>
      </Container>
    </TagWrapper>
  );
}
