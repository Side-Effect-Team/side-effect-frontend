import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
import { DeleteTag, Tag, TagInput, TagWrapper } from "./styled";

interface SkillEditProps {
  stacks: string[];
  setStacks: Dispatch<SetStateAction<string[]>>;
}

export default function SkillEdit({ stacks, setStacks }: SkillEditProps) {
  const [tag, setTag] = useState("");

  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (tag) {
        submitTagItem();
      }
    }
  };
  const submitTagItem = () => {
    if (stacks) {
      let updatedTagList = [...stacks];
      updatedTagList.push(tag);
      setStacks(updatedTagList);
      setTag("");
    }
  };
  const onClickDeleteTag = (el: string) => {
    const deleteTag = el;
    if (stacks) {
      const filteredTag = stacks.filter((tag) => tag !== deleteTag);
      setStacks(filteredTag);
    }
  };
  return (
    <TagWrapper>
      {stacks &&
        stacks.map((el, index) => (
          <Tag key={index}>
            {el}{" "}
            <DeleteTag type="button" onClick={() => onClickDeleteTag(el)}>
              X
            </DeleteTag>
          </Tag>
        ))}
      <TagInput
        type="text"
        placeholder="태그 입력 후 엔터"
        onChange={onChangeTag}
        onKeyPress={onKeyPress}
        value={tag}
      />
    </TagWrapper>
  );
}
