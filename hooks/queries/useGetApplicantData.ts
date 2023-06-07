import { useQuery } from "@tanstack/react-query";
import { getApplicantData } from "@/apis/ApplicantAPI";
import { useRouter } from "next/router";
export const useGetApplicantData = (value: string, positionValue: string) => {
  const router = useRouter();
  const recruitBoardId = router.query.recruitId as string;
  const { data, isLoading, isSuccess } = useQuery(
    ["ApplicantData", value],
    () => getApplicantData(recruitBoardId, value),
    {
      enabled: !!recruitBoardId,
      select: (data) => {
        const applicantNum: { [key: string]: number } = {};
        for (const position in data) {
          applicantNum[position] = data[position].size;
        }
        return {
          applicants: data[positionValue].applicants,
          applicantNum,
        };
      },
    },
  );
  return { data, isLoading, isSuccess };
};
