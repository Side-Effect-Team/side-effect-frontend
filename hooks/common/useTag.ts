import { useState } from "react";
import useToast from "./useToast";

export const useTag = (initialVals: any[]) => {
  const [tags, setTags] = useState<string[]>([...initialVals]);
  const { addToast } = useToast();

  const deleteTag = (value: string) => {
    setTags(tags.filter((tag) => tag !== value));
  };

  const addTag = (value: string) => {
    // 기존 태그 갯수가 5개이면 종료
    if (tags.length >= 5) {
      addToast({
        type: "error",
        title: "error",
        content: "최대 5개까지의 태그를 입력할 수 있습니다",
      });
      return;
    }

    // 중복된 태그 제출 시 종료
    if (tags.includes(value)) {
      addToast({
        type: "error",
        title: "error",
        content: "이미 등록된 태그입니다",
      });
      return;
    }

    setTags([...tags, value]);
  };

  return { tags, setTags, deleteTag, addTag };
};
