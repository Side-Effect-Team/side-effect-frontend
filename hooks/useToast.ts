import { addToast as add, removeToast } from "@/store/toastSlice";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "@/store/hooks";
interface ToastType {
  type: "success" | "error" | "info";
  title: string;
  content: string;
}
export default function useToast() {
  const dispatch = useAppDispatch();

  const deleteToast = (id: string) => {
    dispatch(removeToast(id));
  };

  const addToast = (toast: ToastType) => {
    const id = uuidv4();
    const toastId = {
      ...toast,
      id,
    };
    dispatch(add(toastId));
    setTimeout(() => {
      deleteToast(id);
    }, 3000);
  };
  return { addToast, deleteToast };
}
