import { useMutation, useQueryClient } from "@tanstack/react-query";
import { readAlarm } from "apis/AlarmApi";

export const useReadAlarm = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: readAlarm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notice"] });
    },
  });
  return mutate;
};
