import axios from "axios";
export const getProjectData = async (
  page: number,
  filter: string,
  keyword: string,
) => {
  const token = localStorage.getItem("accessToken");
  const config = token
    ? {
        headers: { Authorization: `Bearer ${token}` },
      }
    : { headers: {} };
  //
  const response = await axios.get(
    `/free-boards/scroll?size=4&filter=${filter}&keyword=${keyword}&lastId=${page}`,
    config,
  );
  return response.data;
};
