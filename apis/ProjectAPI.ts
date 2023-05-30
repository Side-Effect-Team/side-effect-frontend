import customAxios from "./customAxios";
export const getProjectData = async (
  page: number,
  filter: string,
  keyword: string,
) => {
  const response = await customAxios.get(
    `/free-boards/scroll?size=4&filter=${filter}&keyword=${keyword}&lastId=${page}`,
  );
  return response.data;
};
