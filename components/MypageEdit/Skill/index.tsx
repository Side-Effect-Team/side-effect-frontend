import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
import { DeleteTag, Tag, TagInput, TagWrapper } from "./styled";

interface MyPageDetailProps {
  skillTags: string[];
  setSkillTags: Dispatch<SetStateAction<string[]>>;
}

export default function Skill(p: MyPageDetailProps) {
  const [tag, setTag] = useState("");

  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length !== 0 && e.key === "Enter") {
      e.preventDefault();
      submitTagItem();
    }
  };
  const submitTagItem = () => {
    let updatedTagList = [...p.skillTags];
    updatedTagList.push(tag);
    p.setSkillTags(updatedTagList);
    setTag("");
  };
  const onClickDeleteTag = (el: string) => {
    const deleteTag = el;
    const filteredTag = p.skillTags.filter((tag) => tag !== deleteTag);
    p.setSkillTags(filteredTag);
  };
  return (
    <TagWrapper>
      {p.skillTags &&
        p.skillTags.map((el, index) => (
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
