import { POSITION_LIST } from "enum";
import Button from "@/components/Button";
import {
  Wrapper,
  StyledHeader,
  Row,
  NameBox,
  StatusBox,
  CloseBtn,
} from "./styled";

interface PositionDetailProps {
  positions: PositionType[];
}

interface PositionRowProps {
  positionName: string;
  currentNumber: number;
  targetNumber: number;
}

export default function PositionDetail({ positions }: PositionDetailProps) {
  console.log("포지션 정보", positions);

  return (
    <Wrapper>
      <StyledHeader>모집 포지션</StyledHeader>
      {positions.map((position) => {
        // 영문 포지션 이름을 한글로 바꿈
        let positionName = "";
        POSITION_LIST.map((POSITION) => {
          if (POSITION.value === position.positionType)
            positionName = POSITION.name;
        });

        return (
          <PositionRow
            key={position.id}
            positionName={positionName}
            currentNumber={position.currentNumber}
            targetNumber={position.targetNumber}
          />
        );
      })}
      <hr />
    </Wrapper>
  );
}

function PositionRow({
  positionName,
  currentNumber,
  targetNumber,
}: PositionRowProps) {
  const isPossible = targetNumber > 0 && targetNumber > currentNumber;

  return (
    <Row>
      <NameBox>
        <span>{positionName}</span>
      </NameBox>
      <StatusBox>
        <span>
          {currentNumber} / {targetNumber}
        </span>
      </StatusBox>
      {isPossible ? <Button>지원</Button> : <CloseBtn>모집 완료</CloseBtn>}
    </Row>
  );
}
