import { useAppSelector } from "@/store/hooks";
import {
  ToastWrapper,
  ToastItem,
  ToastContent,
  ToastTitle,
  ToastContentWrapper,
} from "./styled";
import { AiFillWarning, AiFillCheckCircle } from "react-icons/ai";
import useToast from "@/hooks/useToast";
export default function Toast() {
  const { toasts } = useAppSelector((state) => state.toast);
  const { deleteToast } = useToast();
  console.log(toasts);
  return (
    <>
      {toasts.length !== 0 && (
        <ToastWrapper>
          {toasts.map((toast) => {
            return (
              <ToastItem
                key={toast.id}
                type={toast.type}
                onClick={() => deleteToast(toast.id)}
              >
                {toast.type === "success" ? (
                  <AiFillCheckCircle size={30} />
                ) : (
                  <AiFillWarning size={30} />
                )}
                <ToastContentWrapper>
                  <ToastTitle>{toast.title}</ToastTitle>
                  <ToastContent>{toast.content}</ToastContent>
                </ToastContentWrapper>
              </ToastItem>
            );
          })}
        </ToastWrapper>
      )}
    </>
  );
}
