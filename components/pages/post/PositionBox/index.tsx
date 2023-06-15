import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { InputForm } from "@/postComps/common/PostForm.styled";
import { POSITION_LIST, RECRUIT_POSITION_FORM } from "enum";
import {
  InputWrapper,
  PositionBoxWapper,
  DirectBox,
  MemberNeedsBox,
  SelectStyled,
} from "./styled";
import Button from "components/Button";
import { POSITIONS } from "pages/post/recruit";

interface PositionBoxProps {
  data: (typeof POSITIONS)[0];
  onDelete: (id: number) => void;
  editPosition: (
    id: number,
    updateVal: (typeof RECRUIT_POSITION_FORM)[0],
  ) => void;
}

export default function PositionBox({
  data,
  onDelete,
  editPosition,
}: PositionBoxProps) {
  const { id } = data;
  const [isDirect, setIsDirect] = useState(false);
  const [positionForm, setPositionForm] = useState({ ...data });

  // 포지션 업데이트
  const handleSelect = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;

    if (!isDirect && name === "positionType" && value === "direct")
      setIsDirect(true);
    if (!isDirect && name === "positionType" && value === "direct") {
    }
    setPositionForm({ ...positionForm, [name]: value });
  };

  // 인원수 업데이트
  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPositionForm({ ...positionForm, [e.target.name]: e.target.value });
  };

  // 직접 입력 -> 직무 선택으로 돌아가는 함수
  const handleIsDirect = (e: MouseEvent) => {
    const { name, value } = e.target as HTMLSelectElement;
    if (isDirect && name === "positionType") {
      POSITION_LIST.map((item) => {
        if (item.value === value) setIsDirect(false);
        return;
      });
    }
  };

  useEffect(() => {
    editPosition(id, positionForm);
  }, [positionForm]);

  return (
    <PositionBoxWapper>
      <InputWrapper>
        <SelectStyled
          id="positionType"
          name="positionType"
          onChange={handleSelect}
          onClick={handleIsDirect}
        >
          {POSITION_LIST.map((item) => {
            const { name, value } = item;
            return (
              <option key={value} value={value}>
                {name}
              </option>
            );
          })}
          <option value="direct">직접 입력</option>
        </SelectStyled>
        {isDirect && (
          <DirectBox>
            <InputForm
              type="text"
              placeholder="포지션을 입력하세요"
              id="positionType"
              name="positionType"
              onChange={handleSelect}
            />
          </DirectBox>
        )}
        <MemberNeedsBox>
          <InputForm
            type="number"
            id="targetNumber"
            name="targetNumber"
            min={0}
            max={10}
            value={positionForm.targetNumber}
            onChange={handleNumber}
          />
        </MemberNeedsBox>
      </InputWrapper>
      {id !== 1 && (
        <Button
          style={{ width: "40px", whiteSpace: "nowrap" }}
          type="button"
          onClick={() => onDelete(id)}
        >
          <GoTrashcan style={{ transform: "scale(1.75)" }} />
        </Button>
      )}
    </PositionBoxWapper>
  );
}
