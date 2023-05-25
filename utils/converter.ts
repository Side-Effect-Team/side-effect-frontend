// 모집 게시판 API의 반환 데이터를 BoardCard data props로 변환하는 함수
export const recruitBoardCardConverter = (fetchedData: RecruitType) => {
  const {
    id,
    content,
    tags,
    title,
    projectName,
    imgSrc,
    likeNum,
    createdAt,
    views,
    like,
  } = fetchedData;
  const newTags = tags ? tags.map((tag) => tag.stackType) : [];
  return {
    id,
    headerImage: imgSrc,
    projectName,
    tags: newTags,
    title,
    content,
    createdAt,
    like,
    likeNum,
    views,
  };
};
