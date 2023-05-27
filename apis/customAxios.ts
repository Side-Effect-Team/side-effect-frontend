import axios from "axios";
import { store } from "@/store/store";
import { removeAuthentication } from "@/store/authSlice";
import { handleAuth } from "@/utils/auth";
const baseURL = process.env.NEXT_PUBLIC_API_URL;
const customAxios = axios.create({
  baseURL,
  withCredentials: true,
});
customAxios.interceptors.request.use(
  (config) => {
    const accessToken = handleAuth.getToken();
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
    if (error.response?.data.code === "AT_001") {
      console.log("액세스토큰만료");
      try {
        const response = await axios.post(`${baseURL}/token/at-issue`);
        handleAuth.setToken(response.headers.authorization);
        return customAxios.request(config);
      } catch (error) {
        console.log("response error", error);
      }
    }
    // 리프레쉬토큰만료
    if (error.response.data.code === "RT_001") {
      alert("로그인 유지기간이 만료되었습니다. 다시 로그인 해주세요!");
      store.dispatch(removeAuthentication());
    }
    return Promise.reject(error);
  },
);
export default customAxios;
