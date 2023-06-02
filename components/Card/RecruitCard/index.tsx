import { useEffect, useState } from "react";
import {
  ButtonsWrapper,
  CreateAt,
  FeedbackNum,
  Footer,
  HeartNotFillIcon,
  IconButton,
  ViewIcon,
} from "../ProjectCard/styled";
import { useAddLikeRecruit } from "@/hooks/mutations/useAddLikeRecuit";
import {
  Container,
  IsRecruiting,
  TagContainer,
  TagTitle,
  TagWrapper,
  Title,
} from "./styled";
import Tag from "@/components/Tag";
import { useRouter } from "next/router";
import HeartButton from "@/components/Button/HeartButton";
export interface RecruitDataProps {
  id: number;
  closed?: boolean;
  tags?: string[];
  positions?: string[];
  title: string;
  createdAt: string;
  like?: boolean;
  likeNum?: number;
  views?: number;
}
interface RecruitCardProps {
  data: RecruitDataProps;
}

export default function RecruitCard({ data }: RecruitCardProps) {
  const recruitMutate = useAddLikeRecruit();
  const [recruitingTitle, setRecruitingTitle] = useState("• 모집중");
  const router = useRouter();

  useEffect(() => {
    if (!data?.closed) {
      setRecruitingTitle("• 모집중");
    } else setRecruitingTitle("• 모집완료");
  }, [recruitingTitle]);

  const newPosition: string[] = [];
  const positions = data?.positions?.map((position) => position.toLowerCase());

  if (positions) {
    if (positions.includes("frontend")) newPosition.push("프론트엔드");
    if (positions.includes("backend")) newPosition.push("백엔드");
    if (positions.includes("designer")) newPosition.push("디자이너");
    if (positions.includes("devops")) newPosition.push("데브옵스");
    if (positions.includes("marketer")) newPosition.push("마케터");
    if (positions.includes("pm")) newPosition.push("기획자");
  }

  const onClickGoToBoard = () => {
    router.push(`/recruits/${data.id}`);
  };

  return (
    <Container onClick={onClickGoToBoard}>
      <HeartButton
        isLike={data?.like || false}
        id={data?.id || 0}
        likeMutate={recruitMutate}
      />
      <IsRecruiting isRecruiting={!data?.closed}>
        {recruitingTitle}
      </IsRecruiting>
      <Title>{data?.title}</Title>
      <TagContainer>
        <TagTitle>모집분야</TagTitle>
        <TagWrapper>
          {newPosition.map((lan, index) => (
            <Tag key={index} fill="false" fontSize="15px">
              {lan}
            </Tag>
          ))}
        </TagWrapper>
      </TagContainer>
      <TagContainer>
        <TagTitle>사용언어</TagTitle>
        <TagWrapper>
          {data?.tags &&
            data?.tags.map((lan, index) => <Tag key={index}>{lan} </Tag>)}
        </TagWrapper>
      </TagContainer>
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
