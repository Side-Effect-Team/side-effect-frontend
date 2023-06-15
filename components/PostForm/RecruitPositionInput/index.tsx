import { GoPlus } from "react-icons/go";
import { InputBox, InputHeader } from "@/postFormComps/common/Form.styled";
import InputLabel from "components/PostForm/common/InputLabel";
import InputGuideText from "components/PostForm/common/InputGuideText";
import { PositionBoxWrapper } from "./styled";
import { RECRUIT_POSITION_FORM } from "enum";
import PositionBox from "components/pages/post/PositionBox";
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
}

export default function RecruitPositionInput({
  label,
  guideText,
  positions,
  addPosition,
  deletePosition,
  editPosition,
}: RecruitPositionInputProps) {
  return (
    <InputBox>
      <InputHeader>
        <InputLabel idName="position" label={label} />
        <InputGuideText guideText={guideText} />
      </InputHeader>
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
    </InputBox>
  );
}
