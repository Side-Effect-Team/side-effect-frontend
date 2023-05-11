import { MouseEvent, useState } from "react";
import {
  IconButton,
  ButtonsWrapper,
  CommentIcon,
  Container,
  Content,
  ContentsWrapper,
  CreateAt,
  FeedbackNum,
  Footer,
  Header,
  ProjectName,
  HeartFillIcon,
  HeartNotFillIcon,
  Tag,
  TagWrapper,
  Title,
} from "./styled";
import { useRouter } from "next/router";
export interface BoardCardProps {
  id: number | string;
  // category?: string;
  headerImage?: string;
  projectName?: string;
  tags?: string[];
  title: string;
  content: string;
  createdAt: string;
  like?: boolean;
  likeNum?: number;
  commentNum?: number;
}
interface BoardCardDataProps {
  data?: BoardCardProps;
  category: string;
}

export default function BoardCard({ data, category }: BoardCardDataProps) {
  const [isLike, setIsLike] = useState(data?.like);
  const router = useRouter();
  const onClickHeart = (e: MouseEvent<HTMLButtonElement>) => {
    setIsLike((prev) => !prev);
    e.stopPropagation();
  };
  const onClickGoToBoard = (e: MouseEvent<HTMLDivElement>) => {
    if (category === "projects") {
      router.push(`/projects/${e.currentTarget.id}`);
    } else router.push(`/recruits/${e.currentTarget.id}`);
  };
  return (
    <Container id={data?.id.toString()} onClick={onClickGoToBoard}>
      <Header src={data?.headerImage}>
        <ProjectName>{data?.projectName}</ProjectName>
      </Header>
      <ContentsWrapper>
        {data?.tags && (
          <TagWrapper>
            {data?.tags.map((el, index) => (
              <Tag key={index}>{el}</Tag>
            ))}
          </TagWrapper>
        )}
        <Title>{data?.title}</Title>
        <Content>{data?.content}</Content>
        <Footer>
          <CreateAt>{data?.createdAt}</CreateAt>
          <ButtonsWrapper>
            <IconButton onClick={onClickHeart}>
              {isLike ? <HeartFillIcon /> : <HeartNotFillIcon />}
            </IconButton>
            {data?.likeNum && (
              <>
                <FeedbackNum>{data.likeNum}</FeedbackNum>
                <IconButton>
                  <CommentIcon />
                </IconButton>
                <FeedbackNum>{data.commentNum}</FeedbackNum>
              </>
            )}
          </ButtonsWrapper>
        </Footer>
      </ContentsWrapper>
    </Container>
  );
}

// 사용하는 법
// export default function Home(){

// 1. 프로젝트 모집 공고 데이터를 받아왔다고 가정
//   const data = {
//     id: 1234
//     category: "recruits"
//     projectName: "사이드 프로젝트 인원모집",
//     tags: ["Figma", "Spring", "React"],
//     title: "제목입니다",
//     content:
//       "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
//     createdAt: "2023.05.04",
//     like: true,
//   };

// or

// 2. 프로젝트 자랑 데이터를 받아왔다고 가정
//   const data = {
//     id: 1234
//     category: "projects"
//     headerImage: "/img/ProjectDefaultBackground.png",
//     tags: ["Figma", "Spring", "React"],
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
