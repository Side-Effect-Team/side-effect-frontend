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
  HeartFillIcon,
  HeartNotFillIcon,
  Tag,
  TagWrapper,
  Title,
} from "./styled";
import { useRouter } from "next/router";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useToast from "@/hooks/useToast";
export interface BoardCardProps {
  id: number;
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
  category: string;
}
export const LIKE_PROJECT = async (id: number) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/like/${id}`,
    null,
    config,
  );
};
export const LIKE_RECRUIT = async (id: number) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/recruit-board/likes/${id}`,
    null,
    config,
  );
};

export default function BoardCard({ data, category }: BoardCardDataProps) {
  const [isLike, setIsLike] = useState(data?.like);
  const [likeNum, setLikeNum] = useState(data?.likeNum || 0);
  const router = useRouter();
  const { addToast, deleteToast } = useToast();

  const onClickHeart = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    // 좋아요 API 추가
    const id = e.currentTarget.id;
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        let url;
        if (category === "projects") {
          url = `${process.env.NEXT_PUBLIC_API_URL}/like/${id}`;
        } else {
          url = `${process.env.NEXT_PUBLIC_API_URL}/recruit-board/likes/${id}`;
        }
        const response = await axios.post(url, null, config);
        setIsLike((prev) => !prev);
        if (isLike && likeNum) {
          setLikeNum(likeNum - 1);
        }
        if (!isLike && likeNum >= 0) {
          setLikeNum(likeNum + 1);
          addToast({
            type: "success",
            title: "success",
            content: "관심 게시물에 추가되었습니다.",
          });
          deleteToast("unique-id");
        }
      } catch (error) {
        console.log(error);
        addToast({
          type: "error",
          title: "error",
          content: "error.",
        });
      }
    } else alert("로그인 후 이용가능합니다.");
  };

  const onClickGoToBoard = (e: MouseEvent<HTMLDivElement>) => {
    if (category === "recruits") {
      router.push(`/recruits/${e.currentTarget.id}`);
    } else router.push(`/projects/${e.currentTarget.id}`);
  };

  return (
    <Container id={data?.id.toString()} onClick={onClickGoToBoard}>
      <Header category={category} src={data?.headerImage}>
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
            <IconButton id={data?.id.toString()} onClick={onClickHeart}>
              {isLike ? <HeartFillIcon /> : <HeartNotFillIcon />}
            </IconButton>
            <FeedbackNum>{likeNum}</FeedbackNum>
            <IconButton>
              <CommentIcon />
            </IconButton>
            <FeedbackNum>{data?.commentNum}</FeedbackNum>
          </ButtonsWrapper>
        </Footer>
      </ContentsWrapper>
    </Container>
  );
}

// 사용하는 법

//     <BoardCard data={data} />
