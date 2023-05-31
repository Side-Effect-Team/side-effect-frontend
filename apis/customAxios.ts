import axios from "axios";
import { store } from "@/store/store";
import { removeAuthentication } from "@/store/authSlice";
import { handleRefreshAccessToken } from "./UserAPI";
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
    //액세스토큰만료시 자동 재발급 갱신
    if (error.response?.data.code === "AT_001") {
      try {
        await handleRefreshAccessToken();
        const newAccessToken = store.getState().auth.token;

        config.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return customAxios.request(config);
      } catch (error: any) {
        //리프레쉬토큰 만료
        if (error.response.data.code === "RT_001") {
          store.dispatch(removeAuthentication());
          window.alert("로그인 유지기간이 만료되었습니다.");
          window.location.replace("/");
        }
        console.log(error);
      }
    }
    //로컬스토리지에서 액세스토큰을 조작하는경우 핸들링
    if (error.response.data.code === "T_001") {
      store.dispatch(removeAuthentication());
      window.alert("비정상적인 접근입니다.");
      window.location.replace("/");
    }
    return Promise.reject(error);
  },
);
export default customAxios;
