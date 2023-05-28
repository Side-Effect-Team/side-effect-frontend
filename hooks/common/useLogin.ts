import { createAuthentication } from "@/store/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { closeModal } from "@/store/modalSlice";
import { handleAuth } from "@/utils/auth";
import useToast from "./useToast";
import { handleModalView } from "@/store/loginViewTransitionSlice";
import { addProviderType, addEmail } from "@/store/userInfoStoreSlice";
const useLogin = (providerType: "GOOGLE" | "KAKAO") => {
  const dispatch = useAppDispatch();
  const { addToast } = useToast();

  const handleSuccessLogin = (res: any) => {
    localStorage.setItem("id", res.data.userId);
    handleAuth.setToken(res.headers.authorization);
    dispatch(createAuthentication(res.headers.authorization));
    dispatch(closeModal());
  };
  const handleFailedLogin = (error: any) => {
    if (error?.response?.status === 400) {
      dispatch(addProviderType(providerType));
      dispatch(addEmail(error.response.data.email));
      dispatch(handleModalView({ modalView: "registerNickname" }));
    } else {
      addToast({
        type: "error",
        title: "로그인 실패",
        content: "서버가 원할하지 않습니다. 고객센터로 문의 부탁드립니다.",
      });
    }
  };
  return { handleSuccessLogin, handleFailedLogin };
};
export default useLogin;
