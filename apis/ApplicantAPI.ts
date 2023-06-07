import customAxios from "./customAxios";
interface ApplicantType {
  recruitBoardId: string;
  applicantId: number;
  status?: "approved" | "rejected";
}
export const cancelApply = async (positionId: number) => {
  const res = customAxios.delete(`/applicant/${positionId}`);
  return res;
};

export const applyPosition = async (positionId: number) => {
  const res = await customAxios.post(`/applicant/${positionId}`);
  return res;
};
export const manageApplicant = async (data: ApplicantType) => {
  const { recruitBoardId, applicantId, status } = data;
  try {
    await customAxios.patch("/applicant", {
      recruitBoardId,
      applicantId,
      status,
    });
  } catch (error) {
    console.log(error);
  }
};
export const handleRemoveMember = async (data: ApplicantType) => {
  const { recruitBoardId, applicantId } = data;
  try {
    await customAxios.patch("/applicant/release", {
      recruitBoardId,
      applicantId,
    });
  } catch (error) {
    console.log(error);
  }
};
