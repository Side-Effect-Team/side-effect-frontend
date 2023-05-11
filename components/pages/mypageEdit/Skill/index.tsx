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
    let updatedTagList = [...stacks];
    updatedTagList.push(tag);
    setStacks(updatedTagList);
    setTag("");
  };
  const onClickDeleteTag = (el: string) => {
    const deleteTag = el;
    const filteredTag = stacks.filter((tag) => tag !== deleteTag);
    setStacks(filteredTag);
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
        placeholder="태그를 입력해주세요"
        onChange={onChangeTag}
        onKeyPress={onKeyPress}
        value={tag}
      />
    </TagWrapper>
  );
}
