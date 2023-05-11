import { useAppSelector } from "@/store/hooks";
import {
  ToastWrapper,
  ToastItem,
  ToastContent,
  ToastTitle,
  ToastContentWrapper,
  ToastIcon,
} from "./styled";
import {
  AiFillWarning,
  AiFillCheckCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import useToast from "@/hooks/useToast";
type IconType = "success" | "error" | "info";
export default function Toast() {
  const { toasts } = useAppSelector((state) => state.toast);
  const { deleteToast } = useToast();
  const handleIcon = (type: IconType) => {
    return type === "success" ? (
      <AiFillCheckCircle size={30} />
    ) : type === "error" ? (
      <AiFillCloseCircle size={30} />
    ) : (
      <AiFillWarning size={30} />
    );
  };
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
                <ToastIcon type={toast.type}>
                  {handleIcon(toast.type)}
                </ToastIcon>
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
