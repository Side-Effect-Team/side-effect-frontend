import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
export interface ChangeProps {
  nickname?: string;
  introduction?: string;
  tags?: string[];
  position?: string;
  career?: string;
  githubUrl?: string;
  blogUrl?: string;
  portfolioUrl?: string;
}
type EditMutateProps = UseMutateFunction<
  AxiosResponse<any, any>,
  unknown,
  ChangeProps,
  unknown
>;
export const updateData = async (
  changes: ChangeProps,
  imgSrc: string,
  uploadImg: (url: string) => Promise<any>,
  mutate: EditMutateProps,
  url: string,
) => {
  if (
    Object.keys(changes).length === 0 &&
    (imgSrc === null || imgSrc.startsWith("http"))
  ) {
    alert("변경사항이 없습니다.");
    return;
  } else if (
    Object.keys(changes).length !== 0 &&
    (imgSrc === null || imgSrc.startsWith("http"))
  ) {
    mutate(changes);
  } else if (
    Object.keys(changes).length === 0 &&
    !(imgSrc === null || imgSrc.startsWith("http"))
  ) {
    await uploadImg(`${process.env.NEXT_PUBLIC_API_URL}/${url}`);
  } else {
    await uploadImg(`${process.env.NEXT_PUBLIC_API_URL}/${url}`);
    mutate(changes);
  }
};
