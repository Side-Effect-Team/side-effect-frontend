import { useInfiniteQuery } from "@tanstack/react-query";
import { getProjectData } from "apis/ProjectAPI";
interface ProjectList {
  id: number;
  content: string;
  title: string;
  createdAt: string;
}
interface InfiniteProjectType {
  hasNext: boolean;
  lastId: number;
  projects: ProjectList[];
}
export const useGetProjectData = (
  filter: string = "",
  keyword: string = "",
) => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isSuccess,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["projectData", filter, keyword],
    ({ pageParam = -1 }) => getProjectData(pageParam, filter, keyword),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.lastId === 1 ? undefined : lastPage.lastId;
      },
    },
  );
  return {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isSuccess,
    isFetchingNextPage,
  };
};
