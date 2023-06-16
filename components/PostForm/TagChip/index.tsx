import { TiTimes } from "react-icons/ti";
import { Wrapper, Container, SpanStyled } from "./styled";

interface TagChipProps {
  keyword: string;
  deleteTag?: (value: string) => void;
}

// deleteTag 있으면 게시글 생성 페이지에서 사용
// 없으면 게시글 상세 페이지에서 사용
export default function TagChip({ keyword, deleteTag }: TagChipProps) {
  const isRemovable = !!deleteTag;

  return (
    <Wrapper>
      <Container isRemovable={isRemovable}>
        {deleteTag ? (
          <SpanStyled onClick={() => deleteTag(keyword)}>
            {keyword}
            <TiTimes size={15} />
          </SpanStyled>
        ) : (
          <SpanStyled>{keyword}</SpanStyled>
        )}
      </Container>
    </Wrapper>
  );
}
