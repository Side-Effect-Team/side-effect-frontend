import { useState } from "react";
import { RECRUIT_POSITION_FORM } from "enum";
import useToast from "./useToast";

export const usePosition = () => {
  const [positions, setPositions] = useState([...RECRUIT_POSITION_FORM]);
  const { addToast } = useToast();

  // 포지션 변경
  const editPosition = (
    id: number,
    updateVal: (typeof RECRUIT_POSITION_FORM)[0],
  ) => {
    const newPositions = [...positions];
    const idx = newPositions.findIndex((position) => position.id === id);
    newPositions.splice(idx, 1, updateVal);
    setPositions(newPositions);
  };

  // 포지션 추가
  const addPosition = () => {
    const lastIdx = positions[positions.length - 1].id;
    setPositions([
      ...positions,
      { ...RECRUIT_POSITION_FORM[0], id: lastIdx + 1 },
    ]);
  };

  // 포지션 제거
  const deletePosition = (id: number) => {
    const newPositions = positions.filter((position) => position.id !== id);
    setPositions(newPositions);
  };

  // 포지션 검증
  const validatePosition = () => {
    let isValidate = true;

    // 모집인원 0명 있는지 검사
    positions.forEach((position: (typeof RECRUIT_POSITION_FORM)[0]) => {
      if (isValidate && position.targetNumber <= 0) {
        isValidate = false;
        addToast({
          type: "error",
          title: "error",
          content: "1명 이상의 모집 인원을 입력해야 합니다",
        });
        return;
      }
    });

    // 중복 포지션 검사
    if (isValidate && positions.length > 1) {
      const positionTypes = positions.map((position) => position.positionType);
      isValidate = !isDuplicatePosition(positionTypes);
      addToast({
        type: "error",
        title: "error",
        content: "포지션은 중복될 수 없습니다",
      });
      return;
    }

    return isValidate;
  };

  // 중복 포지션 체커
  const isDuplicatePosition = (positionTypes: string[]) => {
    return positionTypes.some(
      (position) =>
        positionTypes.indexOf(position) !== positionTypes.lastIndexOf(position),
    );
  };

  return {
    positions,
    editPosition,
    addPosition,
    deletePosition,
    validatePosition,
  };
};
