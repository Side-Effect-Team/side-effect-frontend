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

export const getApplicantData = async (
  recruitBoardId: string,
  value: string,
) => {
  try {
    const response = await customAxios.get(
      `/applicant/list/${recruitBoardId}?status=${value}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const manageApplicant = async (data: ApplicantType) => {
  const { recruitBoardId, applicantId, status } = data;
  try {
    await customAxios.patch("/applicant", {
      recruitBoardId,
      applicantId,
      status,
    });
  } catch (error: any) {
    console.log(error);
    if (error.response.data.code === "BP_002") {
      throw new Error(error.response.data.message);
    }
    throw new Error("서버가 원활하지 않습니다. 고객센터로 문의 바랍니다.");
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
