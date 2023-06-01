import { POSITION_LIST } from "enum";

import { Wrapper, StyledHeader } from "./styled";

import PositionRow from "@/detailComps/PositionRow";

interface PositionDetailProps {
  positions: PositionType[];
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
            supported={position.supported}
            positionId={position.id}
          />
        );
      })}
      <hr />
    </Wrapper>
  );
}
