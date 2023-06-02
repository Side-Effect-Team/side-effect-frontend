import { useEffect, useState } from "react";
import { useAddLikeRecruit } from "@/hooks/mutations/useAddLikeRecuit";
import { Container, IsRecruiting, Title } from "./styled";
import { useRouter } from "next/router";
import HeartButton from "@/components/Button/HeartButton";
import TagBox from "@/components/Tag/TagBox";
import CardFooter from "../../Footer/CardFooter";
interface RecruitDataProps {
  closed: boolean;
  commentNum: number;
  createdAt: string;
  id: number;
  like: boolean;
  likeNum: number;
  positions: string[];
  tags: string[];
  title: string;
  views: number;
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
      <TagBox
        title="모집분야"
        tagArray={newPosition}
        fill="false"
        fontSize="15px"
      />
      <TagBox title="사용언어" tagArray={data?.tags} />
      <CardFooter
        createdAt={data?.createdAt}
        views={data?.views}
        commentNum={data?.commentNum}
        likeNum={data?.likeNum}
      />
    </Container>
  );
}
