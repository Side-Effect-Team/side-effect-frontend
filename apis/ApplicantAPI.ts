import customAxios from "./customAxios";

export const cancelApply = async (positionId: number) => {
  const res = customAxios.delete(`/applicant/${positionId}`);
  return res;
};

export const applyPosition = async (positionId: number) => {
  const res = await customAxios.post(`/applicant/${positionId}`);
  return res;
};
