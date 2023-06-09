import { createAuthentication } from "store/authSlice";
import { useAppDispatch } from "store/hooks";
import { closeModal } from "store/modalSlice";
import useToast from "./useToast";
import { handleModalView } from "store/loginViewTransitionSlice";
import { addProviderType, addEmail } from "store/userInfoStoreSlice";
import { AxiosError, AxiosResponse } from "axios";
interface ResponseType {
  userId: string;
  authorization: string;
}
interface ErrorResponseType {
  status: number;
  email: string;
}

const useLogin = (providerType: "GOOGLE" | "KAKAO") => {
  const dispatch = useAppDispatch();
  const { addToast } = useToast();

  const handleSuccessLogin = (res: AxiosResponse<ResponseType>) => {
    dispatch(
      createAuthentication({
        userId: res.data.userId,
        token: res.headers.authorization,
      }),
    );
    dispatch(closeModal());
  };
  const handleFailedLogin = (error: AxiosError<ErrorResponseType>) => {
    if (error?.response?.status === 400) {
      dispatch(addProviderType(providerType));
      dispatch(addEmail(error.response.data.email));
      dispatch(handleModalView({ modalView: "registerNickname" }));
    } else {
      console.log(error);
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
