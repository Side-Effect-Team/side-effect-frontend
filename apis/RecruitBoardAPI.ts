import customAxios from "./customAxios";

export const addLikeRecruit = async (id: number) => {
  const response = await customAxios.post(`/recruit-board/likes/${id}`, null);
  return response;
};

// 상세 게시글 하나 받아오기
export const getRecruitPost = async (postId: string) => {
  const response = await customAxios.get(`/recruit-board/${postId}`);
  return response.data;
};

// 상세 게시글 여러개 받아오기
export const getRecruits = async (
  size: number,
  stackType: string,
  keyword: string,
  lastId: number,
) => {
  let url = `/recruit-board/scroll?size=${size}`;
  if (stackType) url += `&stackType=${stackType}`;
  if (keyword) url += `&keyword=${keyword}`;
  if (lastId && lastId > 1) url += `&lastId=${lastId}`;
  console.log(url);
  const response = await customAxios.get(url);
  return response.data;
};
