import { useAppSelector } from "@/store/hooks";
import { ToastWrapper, ToastItem } from "./styled";
export default function Toast() {
  const { toasts } = useAppSelector((state) => state.toast);

  return (
    <ToastWrapper>
      {toasts.map((toast) => {
        return <ToastItem key={toast.id}>d</ToastItem>;
      })}
    </ToastWrapper>
  );
}
