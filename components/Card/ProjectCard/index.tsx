import { MouseEvent, useEffect, useState } from "react";
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
  HeartWrapper,
  HeartFillIcon,
} from "./styled";
import { useRouter } from "next/router";
import { useAddLikeProject } from "@/hooks/mutations/useAddLikeProject";
import { useAppSelector } from "@/store/hooks";
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
  // category: string;
}

export default function BoardCard({ data }: BoardCardDataProps) {
  const { token } = useAppSelector((state) => state.auth);
  const projectMutate = useAddLikeProject();
  const router = useRouter();
  const onClickHeart = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    if (token) {
      projectMutate(id, {
        onSuccess: (res) => {
          if (res.data.message.includes("추천했습니다")) {
            setHeartLike(true);
          } else setHeartLike(false);
        },
      });
    } else alert("로그인 후 이용가능합니다.");
  };

  const onClickGoToBoard = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/projects/${e.currentTarget.id}`);
  };
  const [heartLike, setHeartLike] = useState(data?.like || false);

  useEffect(() => {
    setHeartLike(false);
  }, []);
  return (
    <Container id={data?.id.toString()} onClick={onClickGoToBoard}>
      <Header src={data?.headerImage}>
        <HeartWrapper
          isLike={data?.like || false}
          id={data?.id.toString()}
          onClick={onClickHeart}
        >
          <HeartFillIcon
            islike={data?.like ? data?.like.toString() : "false"}
            heartlike={heartLike.toString()}
          />
        </HeartWrapper>
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
