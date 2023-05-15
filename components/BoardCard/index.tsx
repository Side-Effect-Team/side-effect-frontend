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
  category?: string;
  headerImage?: string;
  projectName?: string;
  stacks?: string[];
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

export default function BoardCard({ data }: BoardCardDataProps) {
  const [isLike, setIsLike] = useState(data?.like);
  const router = useRouter();
  const onClickHeart = (e: MouseEvent<HTMLButtonElement>) => {
    setIsLike((prev) => !prev);
    e.stopPropagation();
  };
  const onClickGoToBoard = (e: MouseEvent<HTMLDivElement>) => {
    if (data?.category === "recruits") {
      router.push(`/recruits/${e.currentTarget.id}`);
    } else router.push(`/projects/${e.currentTarget.id}`);
  };
  return (
    <Container id={data?.id.toString()} onClick={onClickGoToBoard}>
      <Header category={data?.category} src={data?.headerImage}>
        <ProjectName>{data?.projectName}</ProjectName>
      </Header>
      <ContentsWrapper>
        {data?.stacks && (
          <TagWrapper>
            {data?.stacks.map((el, index) => (
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

//     <BoardCard data={data} />
