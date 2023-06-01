import customAxios from "./customAxios";

export const cancelApply = async (id: number) => {
  const response = customAxios.delete(`/applicant/${id}`);
  return response;
};
