import { SKILL_LIST } from "@/postFormComps/KeywordBox";

interface TagsType {
  stackType: string;
  url: null;
}

// nextjs -> Next.js 형태로 변환해주는 함수
export const capitalizeTags = (tags: TagsType[]) => {
  return tags.map((tag) => {
    SKILL_LIST.map((skill) => {
      if (tag.stackType === skill.value) return skill.name;
    });
  });
};

export const capitalizeTag = (tag: string) => {
  let result = "";
  SKILL_LIST.map((skill) => {
    if (tag === skill.value) {
      result = skill.name;
      return;
    }
  });
  return result;
};
