import { useState } from "react";
import * as S from "./styles";
interface BoardCardProps {
  headerTitle: string;
  tag: string[];
  title: string;
  content: string;
  createdAt: string;
  like: boolean;
}
interface BoardCardDataProps {
  data?: BoardCardProps;
}

export default function BoardCard(p: BoardCardDataProps) {
  const [isLike, setIsLike] = useState(p.data?.like);
  const onClickHeart = () => {
    setIsLike((prev) => !prev);
  };
  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>{p.data?.headerTitle}</S.HeaderTitle>
      </S.Header>
      <S.ContentsWrapper>
        <S.TagWrapper>
          {/* 넘친다면 +5 이런식으로 태그가 더 있다는 것을 알려줄 수 있는 로직이 필요함 */}
          {p.data?.tag.map((el, index) => (
            <S.Tag key={index}>{el}</S.Tag>
          ))}
        </S.TagWrapper>
        <S.Title>{p.data?.title}</S.Title>
        <S.Content>{p.data?.content}</S.Content>
        <S.Footer>
          <S.CreateAt>{p.data?.createdAt}</S.CreateAt>
          <S.HeartButton onClick={onClickHeart}>
            {isLike ? <S.HeartFillIcon /> : <S.HeartNotFillIcon />}
          </S.HeartButton>
        </S.Footer>
      </S.ContentsWrapper>
    </S.Container>
  );
}

// 사용하는 법
// export default function Home(){

// 데이터를 받아왔다고 가정
//   const data = {
//     headerTitle: "사이드 프로젝트 인원모집",
//     tag: ["Figma", "Spring", "React"],
//     title: "제목입니다",
//     content:
//       "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
//     createdAt: "2023.05.04",
//     like: true,
//   };

// return (
//     <>
//     <BoardCard data={data} />
//     </>
// )
// }
