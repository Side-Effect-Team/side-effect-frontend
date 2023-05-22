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
  ProjectName,
  HeartNotFillIcon,
  Tag,
  TagWrapper,
  Title,
  ViewIcon,
  HeartWrapper,
  HeartFillIcon,
} from "./styled";
import { useRouter } from "next/router";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useToast from "@/hooks/useToast";
import { color } from "framer-motion";
export interface BoardCardProps {
  id: number;
  category?: string;
  headerImage?: string;
  projectName?: string;
  tags?: string[];
  title: string;
  content: string;
  createdAt: string;
  like?: boolean;
  likeNum?: number;
  commentNum?: number;
  views?: number;
}
interface BoardCardDataProps {
  data?: BoardCardProps;
  category: string;
}
const fetchProject = async (id: number) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/like/${id}`,
    null,
    config,
  );
  return response;
};
const fetchRecruit = async (id: number) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/recruit-board/likes/${id}`,
    null,
    config,
  );
  return response;
};
export default function BoardCard({ data, category }: BoardCardDataProps) {
  const queryClient = useQueryClient();
  const { mutate: projectMutate } = useMutation({
    mutationFn: fetchProject,
    onSuccess: (res) => {
      if (res.data.message.includes("추천했습니다")) {
        addToast({
          type: "success",
          title: "success",
          content: "관심게시물로 등록되었습니다",
        });
        setHeartLike(true);
      } else setHeartLike(false);
      queryClient.invalidateQueries({ queryKey: ["projectData"] });
      queryClient.invalidateQueries({ queryKey: ["mypageData"] });
    },
  });
  const { mutate: recruitMutate } = useMutation({
    mutationFn: fetchRecruit,
    onSuccess: (res) => {
      if (res.data.message.includes("추천했습니다")) {
        addToast({
          type: "success",
          title: "success",
          content: "관심게시물로 등록되었습니다",
        });
        setHeartLike(true);
      }
      setHeartLike(false);
      queryClient.invalidateQueries({ queryKey: ["recruits"] });
      queryClient.invalidateQueries({ queryKey: ["mypageData"] });
    },
  });
  const router = useRouter();
  const { addToast } = useToast();
  const onClickHeart = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // 좋아요 API 추가
    const id = Number(e.currentTarget.id);
    const token = localStorage.getItem("accessToken");
    if (token) {
      if (category === "projects") {
        projectMutate(id);
      } else {
        recruitMutate(id);
        console.log(data);
      }
    } else alert("로그인 후 이용가능합니다.");
  };

  const onClickGoToBoard = (e: MouseEvent<HTMLDivElement>) => {
    if (category === "recruits") {
      router.push(`/recruits/${e.currentTarget.id}`);
    } else router.push(`/projects/${e.currentTarget.id}`);
  };
  const [heartLike, setHeartLike] = useState(data?.like || false);

  useEffect(() => {
    setHeartLike(false);
  }, []);
  return (
    <Container id={data?.id.toString()} onClick={onClickGoToBoard}>
      <Header category={category} src={data?.headerImage}>
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
        <ProjectName>{data?.projectName}</ProjectName>
      </Header>
      <ContentsWrapper>
        <Title>{data?.title}</Title>
        <Content>{data?.content}</Content>
        {data?.tags && (
          <TagWrapper>
            {data?.tags.map((el, index) => (
              <Tag key={index}>{el}</Tag>
            ))}
          </TagWrapper>
        )}
        <Footer>
          <CreateAt>{data?.createdAt}</CreateAt>
          <ButtonsWrapper>
            <IconButton>
              <ViewIcon />
            </IconButton>
            <FeedbackNum>{data?.views}</FeedbackNum>
            {data?.commentNum !== undefined && (
              <>
                <IconButton>
                  <CommentIcon />
                </IconButton>
                <FeedbackNum>{data?.commentNum}</FeedbackNum>
              </>
            )}
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

//     <BoardCard data={data} category={string}/>
