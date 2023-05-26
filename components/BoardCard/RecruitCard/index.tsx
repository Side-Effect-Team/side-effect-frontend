import { MouseEvent, useEffect, useState } from "react";
import {
  ButtonsWrapper,
  CommentIcon,
  CreateAt,
  FeedbackNum,
  Footer,
  HeartFillIcon,
  HeartNotFillIcon,
  HeartWrapper,
  IconButton,
  ViewIcon,
} from "../styled";
import { useAddLikeRecruit } from "@/hooks/mutations/useAddLikeRecuit";
import { Container, IsRecruiting, TagTitle, TagWrapper, Title } from "./styled";
import Tag from "@/components/Tag";
interface RecruitDataProps {
  id: number;
  isRecruiting: boolean;
  languages: string[];
  position: string[];
  title: string;
  createdAt: string;
  like: boolean;
  likeNum: number;
  views: number;
}
interface RecruitCardProps {
  data: RecruitDataProps;
}

const data: RecruitDataProps = {
  id: 1231,
  isRecruiting: true,
  languages: ["javascript", "java", "figma", "spring", "react"],
  title: "사이드프로젝트 2달동안 같이 하실 팀원 모집합니다",
  // position: ["frontend", "backend", "designer", "devops", "marketer", "pm"],
  position: ["frontend", "backend", "designer"],
  createdAt: "2022.06.05",
  like: false,
  likeNum: 3,
  views: 5,
};

export default function RecruitCard() {
  const [heartLike, setHeartLike] = useState(data?.like || false);
  const recruitMutate = useAddLikeRecruit();
  const [recruitingTitle, setRecruitingTitle] = useState("모집중");

  const onClickHeart = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.id);
    const token = localStorage.getItem("accessToken");
    if (token) {
      recruitMutate(id, {
        onSuccess: (res) => {
          if (res.data.message.includes("추천했습니다")) {
            setHeartLike(true);
          } else setHeartLike(false);
        },
      });
      console.log(data);
    } else alert("로그인 후 이용가능합니다.");
  };
  useEffect(() => {
    setHeartLike(false);
  }, []);
  useEffect(() => {
    if (data?.isRecruiting) {
      setRecruitingTitle("• 모집중");
    } else setRecruitingTitle("• 모집완료");
  }, [recruitingTitle]);

  const newPosition: string[] = [];
  if (data?.position.includes("frontend")) newPosition.push("프론트엔드");
  if (data?.position.includes("backend")) newPosition.push("백엔드");
  if (data?.position.includes("designer")) newPosition.push("디자이너");
  if (data?.position.includes("devops")) newPosition.push("데브옵스");
  if (data?.position.includes("marketer")) newPosition.push("마케터");
  if (data?.position.includes("pm")) newPosition.push("기획자");

  return (
    <Container>
      <HeartWrapper
        isLike={data?.like}
        id={data?.id.toString()}
        onClick={onClickHeart}
      >
        <HeartFillIcon
          islike={data?.like.toString()}
          heartlike={heartLike.toString()}
        />
      </HeartWrapper>
      <IsRecruiting isRecruiting={data?.isRecruiting}>
        {recruitingTitle}
      </IsRecruiting>
      <Title>{data?.title}</Title>
      <TagTitle>모집분야</TagTitle>
      <TagWrapper>
        {newPosition.map((lan, index) => (
          <Tag key={index} fill="false" fontSize="15px">
            {lan}
          </Tag>
        ))}
      </TagWrapper>
      <TagTitle>사용언어</TagTitle>
      <TagWrapper>
        {data?.languages.map((lan, index) => (
          <Tag key={index}>{lan}</Tag>
        ))}
      </TagWrapper>
      <Footer>
        <CreateAt>{data?.createdAt}</CreateAt>
        <ButtonsWrapper>
          <IconButton>
            <ViewIcon />
          </IconButton>
          <FeedbackNum>{data?.views}</FeedbackNum>
          <IconButton>
            <HeartNotFillIcon />
          </IconButton>
          <FeedbackNum>{data?.likeNum}</FeedbackNum>
        </ButtonsWrapper>
      </Footer>
    </Container>
  );
}
