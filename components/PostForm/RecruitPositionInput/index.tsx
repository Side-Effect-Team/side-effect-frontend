import { GoPlus } from "react-icons/go";
import { InputBox, InputHeader } from "@/postFormComps/common/Form.styled";
import InputLabel from "components/PostForm/common/InputLabel";
import InputGuideText from "components/PostForm/common/InputGuideText";
import { PositionBoxWrapper } from "./styled";
import { RECRUIT_POSITION_FORM } from "enum";
import PositionBox from "components/PostForm/PositionBox";
import Button from "../../Button";

interface RecruitPositionInputProps {
  label: string;
  guideText: string;
  positions: typeof RECRUIT_POSITION_FORM;
  addPosition: () => void;
  deletePosition: (id: number) => void;
  editPosition: (
    id: number,
    updateVal: (typeof RECRUIT_POSITION_FORM)[0],
  ) => void;
  isEdit?: boolean;
}

export default function RecruitPositionInput({
  label,
  guideText,
  positions,
  addPosition,
  deletePosition,
  editPosition,
  isEdit,
}: RecruitPositionInputProps) {
  return (
    <InputBox>
      <InputHeader>
        <InputLabel idName="position" label={label} />
        <InputGuideText guideText={guideText} />
      </InputHeader>
      {isEdit ? (
        <p>포지션 수정은 현재 지원되지 않는 기능입니다</p>
      ) : (
        <PositionBoxWrapper>
          {positions.map((position) => (
            <PositionBox
              key={position.id}
              data={position}
              onDelete={deletePosition}
              editPosition={editPosition}
            />
          ))}
          <div>
            <Button type="button" onClick={addPosition}>
              <GoPlus />
            </Button>
          </div>
        </PositionBoxWrapper>
      )}
    </InputBox>
  );
}
