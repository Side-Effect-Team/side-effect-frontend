import customAxios from "./customAxios";

export const addLikeRecruit = async (id: number) => {
  const response = await customAxios.post(`/recruit-board/likes/${id}`, null);
  return response;
};

// 상세 게시글 하나 받아오기
export const getRecruitPost = async (postId: string) => {
  const response = await customAxios.get(`/recruit-board/${postId}`);
  return response;
};
