import { useEffect, useState } from "react";
import Button from "../Button";
import {
  ColumnWrapper,
  Container,
  Position,
  PositionGray,
  RowWrapper,
  Title,
  TitleGray,
} from "./styled";
import { useRouter } from "next/router";

export interface ApplyBoardCardProps {
  id: number;
  isRecruiting: boolean;
  position: string;
  status: string;
  title: string;
}
export interface dataProps {
  data: ApplyBoardCardProps;
}

export default function ApplyBoardCard({ data }: dataProps) {
  const [position, setPosition] = useState(data.position);
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

  const router = useRouter();
  const onClickGoToBoard = () => {
    router.push(`/recruits/${data.id}`);
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
      <Button>지원취소</Button>
    </Container>
  );
}
