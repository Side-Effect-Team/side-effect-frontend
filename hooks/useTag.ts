import { KeyboardEvent, MouseEvent, useState } from "react";

export const useTag = (initialVals: string[]) => {
  const [tags, setTags] = useState<string[]>([...initialVals]);

  const deleteTag = (e: MouseEvent) => {
    const spanEl = e.target as HTMLSpanElement;
    setTags(tags.filter((tag) => tag !== spanEl.textContent));
  };

  const addTag = (e: KeyboardEvent<HTMLInputElement>) => {
    const inputEl = e.target as HTMLInputElement;
    // 아무것도 없는 상태에서 엔터키 누르면 종료
    if (inputEl.value === "") return;

    if (e.key === "Enter") {
      setTags([...tags, inputEl.value]);
      inputEl.value = "";
    }
  };

  return { tags, setTags, deleteTag, addTag };
};
