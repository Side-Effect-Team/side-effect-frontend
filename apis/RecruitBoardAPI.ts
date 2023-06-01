import customAxios from "./customAxios";

export const addLikeRecruit = async (id: number) => {
  const response = await customAxios.post(`/recruit-board/likes/${id}`, null);
  return response;
};
