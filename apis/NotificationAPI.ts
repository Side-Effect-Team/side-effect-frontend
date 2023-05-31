import axios from "axios";
import customAxios from "./customAxios";

export const getAlarmNum = async () => {
  const response = await customAxios.get(`/notice/view-count`);
  return response;
};

export const getAlarmDataAll = async () => {
  const response = await customAxios.get(`/notice`);
  return response;
};

export const getAlarmData = async (lastId: number) => {
  const response = await customAxios.get(`/notice/scroll/${lastId}`);
  return response.data;
};

export const readAlarm = async (id: number) => {
  const response = await customAxios.post(`/notice/${id}`, null);
  return response;
};

export const deleteAlarm = async (id: number) => {
  const response = await customAxios.delete(`/notice/${id}`);
  return response;
};
