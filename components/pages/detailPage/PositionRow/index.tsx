import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CloseBtn, NameBox, Row, StatusBox } from "./styled";
import Button from "components/Button";
import { applyPosition, cancelApply } from "apis/ApplicantAPI";
import useToast from "hooks/common/useToast";

interface PositionRowProps {
  positionName: string;
  currentNumber: number;
  targetNumber: number;
  supported: boolean;
  positionId: number;
}

export default function PositionRow({
  positionName,
  currentNumber,
  targetNumber,
  supported,
  positionId,
}: PositionRowProps) {
  const [isApplied, setIsApplied] = useState(supported);
  const isPossible = targetNumber > 0 && targetNumber > currentNumber;
  const { addToast } = useToast();

  const applyMutation = useMutation({
    mutationFn: (positionId: number) => applyPosition(positionId),
    onError: () => {
      addToast({
        type: "error",
        title: "error",
        content: "지원에 실패했습니다",
      });
    },
    onSuccess: () => {
      setIsApplied(true);
      addToast({
        type: "success",
        title: "success",
        content: "지원에 성공했습니다",
      });
    },
  });

  const cancelMutation = useMutation({
    mutationFn: (positionId: number) => cancelApply(positionId),
    onError: () => {
      addToast({
        type: "error",
        title: "error",
        content: "지원 취소에 실패했습니다",
      });
    },
    onSuccess: () => {
      setIsApplied(false);
      addToast({
        type: "success",
        title: "success",
        content: "지원을 취소했습니다",
      });
    },
  });

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
      {!isPossible ? (
        <CloseBtn>모집 완료</CloseBtn>
      ) : isApplied ? (
        <Button color="coral" onClick={() => cancelMutation.mutate(positionId)}>
          지원 취소
        </Button>
      ) : (
        <Button onClick={() => applyMutation.mutate(positionId)}>지원</Button>
      )}
    </Row>
  );
}
