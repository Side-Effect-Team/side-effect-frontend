import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import useToast from "../../hooks/common/useToast";
import { useAppSelector } from "@/store/hooks";

export const withAuth =
  (Component: ComponentType) =>
  // eslint-disable-next-line react/display-name
  <P extends {}>(props: P) => {
    const router = useRouter();
    const { addToast } = useToast();
    const { token } = useAppSelector((state) => state.auth);

    /* 권한 분기 */
    useEffect(() => {
      if (!token) {
        addToast({
          type: "info",
          title: "로그인 필요!",
          content: "로그인 후 이용이 가능합니다.",
        });
        router.push("/");
        return;
      }
    }, []);
    if (!token) return null;
    return <Component {...props} />;
  };
