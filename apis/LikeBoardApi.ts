import axios from "axios";

export const addLikeProject = async (id: number) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(`/like/${id}`, null, config);
  return response;
};
export const addLikeRecruit = async (id: number) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(`/recruit-board/likes/${id}`, null, config);
  return response;
};
