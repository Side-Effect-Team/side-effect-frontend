import { useState } from "react";
import * as S from "./styles";

export default function BoardCard() {
  const [isLike, setIsLike] = useState(false);
  const onClickHeart = () => {
    setIsLike((prev) => !prev);
  };
  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>사이드 프로젝트 인원모집</S.HeaderTitle>
      </S.Header>
      <S.ContentsWrapper>
        <S.TagWrapper>
          {/* 최대 6개 태그 까지만 가능 */}
          <S.Tag>Figma</S.Tag>
          <S.Tag>spring</S.Tag>
          <S.Tag>React</S.Tag>
        </S.TagWrapper>
        <S.Title>제목입니다</S.Title>
        <S.Content>
          내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
        </S.Content>
        <S.Footer>
          <S.CreateAt>2023.05.04</S.CreateAt>
          <S.HeartButton onClick={onClickHeart}>
            {isLike ? <S.HeartFillIcon /> : <S.HeartNotFillIcon />}
          </S.HeartButton>
        </S.Footer>
      </S.ContentsWrapper>
    </S.Container>
  );
}
