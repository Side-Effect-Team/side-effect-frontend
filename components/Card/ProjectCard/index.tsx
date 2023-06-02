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
  category: string;
  closed: boolean;
  commentNum: number;
  createdAt: string;
  id: number;
  imgUrl: string;
  like: boolean;
  likeNum: number;
  positions: string[];
  subTitle: string;
  tags: string[];
  title: string;
  views: number;
}
interface ProjectCardProps {
  commentNum: number;
  createdAt: string;
  id: number;
  imgUrl: string;
  like: boolean;
  likeNum: number;
  subTitle: string;
  title: string;
  views: number;
}
interface BoardCardDataProps {
  data?: ProjectCardProps;
}

export default function ProjectCard({ data }: BoardCardDataProps) {
  const projectMutate = useAddLikeProject();
  const router = useRouter();

  const onClickGoToBoard = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/projects/${e.currentTarget.id}`);
  };

  return (
    <Container id={data?.id.toString()} onClick={onClickGoToBoard}>
      <Header src={data?.imgUrl}>
        <HeartButton
          isLike={data?.like || false}
          id={data?.id || 0}
          likeMutate={projectMutate}
        />
      </Header>
      <ContentsWrapper>
        <Title>{data?.title}</Title>
        <Content>{data?.subTitle}</Content>
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
