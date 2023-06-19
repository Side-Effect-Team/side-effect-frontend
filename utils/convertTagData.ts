import { SKILL_LIST } from "@/postFormComps/KeywordBox";

interface TagsType {
  stackType: string;
  url: null;
}

// 서버에서 받은 데이터 타입을 string[] 형태로 바꿔주는 함수
export const capitalizeTags = (tags: TagsType[]) => {
  const newTags = [] as string[];
  tags.forEach((tag) => {
    SKILL_LIST.forEach((skill) => {
      if (tag.stackType === skill.value) newTags.push(skill.name);
    });
  });
  return newTags;
};

// 하나의 문자열 nextjs -> Next.js 형태로 변환해주는 함수
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
