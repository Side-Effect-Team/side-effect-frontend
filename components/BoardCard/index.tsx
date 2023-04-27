import { useState } from "react";
import * as S from "./styles";
interface BoardCardProps {
  headerImage?: string;
  headerTitle?: string;
  tag: string[];
  title: string;
  content: string;
  createdAt: string;
  like?: boolean;
  likeNum?: number;
  commentNum?: number;
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
      <S.Header src={p.data?.headerImage}>
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
          <S.ButtonsWrapper>
            <S.ButtonDiv onClick={onClickHeart}>
              {isLike ? <S.HeartFillIcon /> : <S.HeartNotFillIcon />}
            </S.ButtonDiv>
            {p.data?.likeNum && (
              <>
                <S.FeedbackNum>{p.data.likeNum}</S.FeedbackNum>
                <S.ButtonDiv>
                  <S.CommentIcon />
                </S.ButtonDiv>
                <S.FeedbackNum>{p.data.commentNum}</S.FeedbackNum>
              </>
            )}
          </S.ButtonsWrapper>
        </S.Footer>
      </S.ContentsWrapper>
    </S.Container>
  );
}

// 사용하는 법
// export default function Home(){

// 1. 프로젝트 모집 공고 데이터를 받아왔다고 가정
//   const data = {
//     headerTitle: "사이드 프로젝트 인원모집",
//     tag: ["Figma", "Spring", "React"],
//     title: "제목입니다",
//     content:
//       "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
//     createdAt: "2023.05.04",
//     like: true,
//   };

// or

// 2. 프로젝트 자랑 데이터를 받아왔다고 가정
//   const data = {
//     headerImage: "/img/ProjectDefaultBackground.png",
//     tag: ["Figma", "Spring", "React"],
//     title: "Oh My Pet",
//     content:
//       "내 반려동물이 인플루언서? 반려동물 자랑 플랫폼 오 마이 펫 프로젝트 입니다.",
//     createdAt: "2023.05.04",
//     like: true,
//     likeNum: 65,
//     commentNum: 15,
//   };

// return (
//     <>
//     <BoardCard data={data} />
//     </>
// )
// }

// or [{},{},{}...].map((el,index)=>(<BoardCard key={index} data={el} />)
