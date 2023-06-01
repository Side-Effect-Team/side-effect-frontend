import { MouseEvent, useEffect, useState } from "react";
import Button from "../../Button";
import {
  ColumnWrapper,
  Container,
  Position,
  PositionGray,
  RowWrapper,
  Status,
  Title,
  TitleGray,
} from "./styled";
import { useRouter } from "next/router";
import { useCancelApply } from "@/hooks/mutations/useCancelApply";

export interface ApplyBoardCardProps {
  id: number;
  closed: boolean;
  position: string;
  status: string;
  title: string;
  applicationId: number;
  boardId: number;
}
export interface dataProps {
  data: ApplyBoardCardProps;
}

export default function ApplyBoardCard({ data }: dataProps) {
  const [position, setPosition] = useState(data.position);
  const [status, setStatus] = useState(data.status);
  useEffect(() => {
    if (data.position === "FRONTEND") {
      setPosition("프론트엔드");
    } else if (data.position === "BACKEND") {
      setPosition("백엔드");
    } else if (data.position === "DESIGNER") {
      setPosition("디자이너");
    } else if (data.position === "DEVOPS") {
      setPosition("데브옵스");
    } else if (data.position === "MARKETER") {
      setPosition("마케터");
    } else if (data.position === "PM") {
      setPosition("기획자");
    } else {
      setPosition("포지션");
    }
  }, [position]);
  useEffect(() => {
    if (data.status === "PENDING") {
      setStatus("지원취소");
    } else if (data.status === "APPROVED") {
      setStatus("•참여");
    } else if (data.status === "REJECTED") {
      setStatus("•방출");
    }
  }, [status]);
  const router = useRouter();
  const onClickGoToBoard = () => {
    router.push(`/recruits/${data.boardId}`);
  };

  const cancelMutate = useCancelApply();

  const onClickCancelApply = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log(data.applicationId);
    cancelMutate(data?.applicationId);
  };
  return (
    <Container onClick={onClickGoToBoard}>
      <ColumnWrapper>
        <RowWrapper>
          <TitleGray>제목 : </TitleGray>
          <Title>{data.title}</Title>
        </RowWrapper>
        <RowWrapper>
          <PositionGray>지원 포지션 : </PositionGray>
          <Position>{position}</Position>
        </RowWrapper>
      </ColumnWrapper>
      {data.status === "PENDING" ? (
        <Button color="coral" onClick={onClickCancelApply}>
          {status}
        </Button>
      ) : data.status === "APPROVED" ? (
        <Status status={data.status} closed={data.closed}>
          {status}
        </Status>
      ) : (
        <Status status={data.status} closed={data.closed}>
          {status}
        </Status>
      )}
    </Container>
  );
}
