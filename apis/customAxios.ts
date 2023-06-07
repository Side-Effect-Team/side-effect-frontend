import axios from "axios";
import { store } from "@/store/store";
import { removeAuthentication, createAuthentication } from "@/store/authSlice";
import { handleRefreshAccessToken } from "./UserAPI";
axios.defaults.withCredentials = true;
const baseURL = process.env.NEXT_PUBLIC_API_URL;
const customAxios = axios.create({
  baseURL,
  withCredentials: true,
});
customAxios.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().auth.token;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config } = error;
    console.log("error", error);
    //액세스토큰만료되었을때 자동 재발급 갱신
    if (error.response?.data.code === "AT_001") {
      try {
        const response = await axios.post("/token/at-issue");
        const newAccessToken = response.headers.authorization;
        store.dispatch(
          createAuthentication({
            token: newAccessToken,
            userId: store.getState().auth.userId,
          }),
        );
        config.headers.Authorization = `Bearer ${newAccessToken}`;
        return await customAxios.request(config);
      } catch (error: any) {
        // 리프레쉬토큰이 만료되었을때
        if (error.response.data.code === "RT_001") {
          // await axios.delete("/token/logout");
          store.dispatch(removeAuthentication());
          alert("로그인 유지 기간이 만료되었습니다.");
          window.location.replace("/");
        }
      }
    }
    //로컬스토리지에서 액세스토큰을 조작하는경우 핸들링
    if (error.response.data.code === "AT_003") {
      store.dispatch(removeAuthentication());
      window.alert("비정상적인 접근입니다.");
      window.location.replace("/");
    }
    return Promise.reject(error);
  },
);
export default customAxios;
