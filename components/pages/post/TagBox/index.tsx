import { TagWrapper, Container, KeywordWrapper, TagsContainer } from "./styled";
import { useTag } from "@/hooks/useTag";

import {
  GuideWrapper,
  InputBox,
  InputForm,
  LabelForm,
} from "@/postComps/common/PostForm.styled";
import { MouseEventHandler } from "react";

interface TagProps {
  keyword: string;
  deleteTag: MouseEventHandler;
}

export default function TagBox() {
  const { tags, deleteTag, addTag } = useTag();

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
        <KeywordWrapper onClick={deleteTag}>{keyword}</KeywordWrapper>
      </Container>
    </TagWrapper>
  );
}
