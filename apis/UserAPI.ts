import axios from "axios";
import { store } from "@/store/store";
import { createAuthentication } from "@/store/authSlice";
import customAxios from "./customAxios";

export const getMypageData = async () => {
  const id = store.getState().auth.userId;
  const response = await customAxios.get(`/user/mypage/${id}`);
  return response;
};

export const getProfileData = async () => {
  const response = await customAxios.get(`/user/editpage`);
  return response.data;
};

export interface MypageEditProps {
  imgUrl?: string;
  nickname?: string;
  introduction?: string;
  tags?: string[];
  position?: string;
  career?: string;
  githubUrl?: string;
  blogUrl?: string;
  portfolioUrl?: string;
}
export const editProfile = async (changes: MypageEditProps) => {
  const id = store.getState().auth.userId;
  const response = await customAxios.patch(`/user/${id}`, changes);
  return response;
};

export const duplicateNickname = async (nickname: string) => {
  const response = await axios.get(`/user/duple/${nickname}`);
  return response.data;
};

export const handleRefreshAccessToken = async () => {
  const response = await axios.post(
    "/token/at-issue",
    {},
    { withCredentials: true },
  );
  store.dispatch(
    createAuthentication({
      userId: store.getState().auth.userId,
      token: response.headers.authorization,
    }),
  );
};

export const onSuccessLogin = async (token: string, ProviderType: string) => {
  const response = await axios.post(
    "/social/login",
    {},
    { headers: { token, ProviderType } },
  );
  return response;
};

export const deleteAccount = async () => {
  const id = store.getState().auth.userId;
  const response = await customAxios.delete(`/user/${id}`);
  return response;
};
