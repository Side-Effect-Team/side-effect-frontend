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
} from "./styled";
import { useRouter } from "next/router";
import { useCancelApply } from "@/hooks/mutations/useCancelApply";
import { translatePosition, translateStatus } from "@/utils/translateData";

export interface ApplyBoardCardProps {
  id: number;
  closed: boolean;
  position: string;
  status: string;
  title: string;
  applicationId: number;
  boardId: number;
}
interface dataProps {
  data: ApplyBoardCardProps;
}

export default function ApplyBoardCard({ data }: dataProps) {
  const [position, setPosition] = useState(data.position);
  const [status, setStatus] = useState(data.status);
  useEffect(() => {
    translatePosition(data.position, setPosition);
    translateStatus(data.status, setStatus);
  }, [data]);
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
        <Title>{data.title}</Title>
        <RowWrapper>
          <PositionGray>지원 포지션 : </PositionGray>
          <Position>{position}</Position>
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
        </RowWrapper>
      </ColumnWrapper>
    </Container>
  );
}
