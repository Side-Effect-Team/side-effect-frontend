import { useAppSelector } from "@/store/hooks";
import { ToastWrapper, ToastItem, ToastContent, ToastTitle } from "./styled";
import useToast from "@/hooks/useToast";
export default function Toast() {
  const { toasts } = useAppSelector((state) => state.toast);
  const { deleteToast } = useToast();
  console.log(toasts);
  return (
    <ToastWrapper>
      {toasts.map((toast) => {
        return (
          <ToastItem
            key={toast.id}
            type={toast.type}
            onClick={() => deleteToast(toast.id)}
          >
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastContent>{toast.content}</ToastContent>
          </ToastItem>
        );
      })}
    </ToastWrapper>
  );
}
