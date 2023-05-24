import axios from "axios";

export const getAlarmDataAll = async () => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(`/notice`, config);
  return response;
};

export const getAlarmData = async (lastId: number) => {
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(`/notice/scroll/${lastId}`, config);
  return response.data;
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
