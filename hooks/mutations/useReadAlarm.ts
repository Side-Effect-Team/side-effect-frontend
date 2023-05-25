import { useMutation, useQueryClient } from "@tanstack/react-query";
import { readAlarm } from "apis/NotificationAPI";

export const useReadAlarm = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: readAlarm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notice"] });
      queryClient.invalidateQueries({ queryKey: ["noticeNum"] });
    },
  });
  return mutate;
};
