import customAxios from "./customAxios";

export const addLikeProject = async (id: number) => {
  const response = await customAxios.post(`/like/${id}`, null);
  return response;
};
