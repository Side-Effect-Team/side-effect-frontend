import { MouseEvent } from "react";
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
  HeartNotFillIcon,
  Title,
  ViewIcon,
} from "./styled";
import { useRouter } from "next/router";
import { useAddLikeProject } from "@/hooks/mutations/useAddLikeProject";
import HeartButton from "@/components/Button/HeartButton";
export interface BoardCardProps {
  id: number;
  headerImage?: string;
  tags?: string[];
  title: string;
  content: string;
  createdAt: string;
  like?: boolean;
  likeNum?: number;
  commentNum?: number;
  views?: number;
  category?: string; // type error로 추가
  closed?: boolean;
  positions?: string[];
}
interface BoardCardDataProps {
  data?: BoardCardProps;
}

export default function BoardCard({ data }: BoardCardDataProps) {
  const projectMutate = useAddLikeProject();
  const router = useRouter();

  const onClickGoToBoard = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/projects/${e.currentTarget.id}`);
  };

  return (
    <Container id={data?.id.toString()} onClick={onClickGoToBoard}>
      <Header src={data?.headerImage}>
        <HeartButton
          isLike={data?.like || false}
          id={data?.id || 0}
          likeMutate={projectMutate}
        />
      </Header>
      <ContentsWrapper>
        <Title>{data?.title}</Title>
        <Content>{data?.content}</Content>
        <Footer>
          <CreateAt>{data?.createdAt}</CreateAt>
          <ButtonsWrapper>
            <IconButton>
              <ViewIcon />
            </IconButton>
            <FeedbackNum>{data?.views}</FeedbackNum>
            <IconButton>
              <CommentIcon />
            </IconButton>
            <FeedbackNum>{data?.commentNum}</FeedbackNum>
            <IconButton>
              <HeartNotFillIcon />
            </IconButton>
            <FeedbackNum>{data?.likeNum}</FeedbackNum>
          </ButtonsWrapper>
        </Footer>
      </ContentsWrapper>
    </Container>
  );
}

// 사용하는 법
//     <BoardCard data={data} />
