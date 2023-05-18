import { getTodayDate } from "./getTodayDate";

// 모집 게시판 API의 반환 데이터를 BoardCard data props로 변환하는 함수
export const recruitBoardCardConverter = (
  category: string,
  fetchedData: RecruitType,
) => {
  const { id, content, tags, title, projectName, imgSrc, positions } =
    fetchedData;
  const newTags = tags.map((tag) => tag.stackType);
  return {
    id,
    category,
    headerImage: imgSrc,
    projectName,
    tags: newTags,
    title,
    content,
    createdAt: getTodayDate(),
    like: !!Math.round(Math.random()),
    likeNum: Math.round(Math.random() * 100),
    commentNum: Math.round(Math.random() * 100),
  };
};
