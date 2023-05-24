import axios from "axios";

export const getAlarmList = async () => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.get(`/notice`, config);
};

export const readAlarm = async (id: number) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(`/notice/${id}`, null, config);
  return response;
};

export const deleteAlarm = async (id: number) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.delete(`/notice/${id}`, config);
  return response;
};
