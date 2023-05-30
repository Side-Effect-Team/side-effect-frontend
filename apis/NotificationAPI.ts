import axios from "axios";
import customAxios from "./customAxios";

export const getAlarmNum = async () => {
  // const token = localStorage.getItem("accessToken");
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  const response = await customAxios.get(`/notice/view-count`);
  return response;
};

export const getAlarmDataAll = async () => {
  // const token = localStorage.getItem("accessToken");
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  const response = await customAxios.get(`/notice`);
  return response;
};

export const getAlarmData = async (lastId: number) => {
  // const token = localStorage.getItem("accessToken");
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  const response = await customAxios.get(`/notice/scroll/${lastId}`);
  return response.data;
};

export const readAlarm = async (id: number) => {
  // const token = localStorage.getItem("accessToken");
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  const response = await customAxios.post(`/notice/${id}`, null);
  return response;
};

export const deleteAlarm = async (id: number) => {
  // const token = localStorage.getItem("accessToken");
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  const response = await customAxios.delete(`/notice/${id}`);
  return response;
};
