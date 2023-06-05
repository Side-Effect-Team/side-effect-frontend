import customAxios from "./customAxios";

export const getProjectData = async (
  page: number,
  filter: string,
  keyword: string,
) => {
  const response = await customAxios.get(
    `/free-boards/scroll?size=8&filter=${filter}&keyword=${keyword}&lastId=${page}`,
  );
  return response.data;
};

// 상세 게시글 하나 받아오기
export const getProjectPost = async (postId: string) => {
  const response = await customAxios.get(`/free-boards/${postId}`);
  return response;
};
