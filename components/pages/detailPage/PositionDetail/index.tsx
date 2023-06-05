import { AiOutlineTeam } from "react-icons/ai";
import { POSITION_LIST } from "enum";
import { Wrapper, HeaderBox, StyledHeader } from "./styled";
import PositionRow from "@/detailComps/PositionRow";
import Button from "@/components/Button";
import ManageTeamModal from "@/components/Modals/ManageTeamModal/ManageTeamModal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openModal } from "@/store/modalSlice";

interface PositionDetailProps {
  writerId: number;
  positions: PositionType[];
}

export default function PositionDetail({
  writerId,
  positions,
}: PositionDetailProps) {
  const userId = useAppSelector((state) => +state.auth.userId);
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);

  return (
    <Wrapper>
      <HeaderBox>
        <StyledHeader>모집 포지션</StyledHeader>
        {writerId === userId && (
          <Button
            onClick={() =>
              dispatch(openModal({ modalType: "ManageTeamModal" }))
            }
          >
            <AiOutlineTeam size={25} />
          </Button>
        )}
      </HeaderBox>

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
      {isOpen && <ManageTeamModal />}
    </Wrapper>
  );
}
