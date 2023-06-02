import { AiOutlineTeam } from "react-icons/ai";
import { POSITION_LIST } from "enum";
import { Wrapper, StyledHeader } from "./styled";
import { useAppSelector } from "@/store/hooks";
import PositionRow from "@/detailComps/PositionRow";

interface PositionDetailProps {
  writerId: number;
  positions: PositionType[];
}

export default function PositionDetail({
  writerId,
  positions,
}: PositionDetailProps) {
  const userId = useAppSelector((state) => +state.auth.userId);
  return (
    <Wrapper>
      <div>
        <StyledHeader>모집 포지션</StyledHeader>
        {writerId === userId && (
          <span>
            <AiOutlineTeam />
          </span>
        )}
      </div>

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
