import axios from "axios";

export const cancelApply = async (id: number) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = axios.delete(`/applicant/${id}`, config);
  return response;
};
