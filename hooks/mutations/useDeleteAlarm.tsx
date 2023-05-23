import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAlarm } from "apis/AlarmApi";

export const useDeleteAlarm = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteAlarm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notice"] });
    },
  });
  return mutate;
};
