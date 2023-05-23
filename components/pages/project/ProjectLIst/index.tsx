import { ProjectListWrapper } from "./styled";
import BoardCard from "@/components/BoardCard";

interface PageType {
  hasNext: boolean;
  lastId: number;
  projects: ProjectType[];
}
interface ProjectDataType {
  pageParams: unknown[];
  pages: PageType[];
}

export default function ProjectList({ data }: any) {
  //data 타입수정필요
  console.log(data);
  return (
    <ProjectListWrapper>
      {data.pages.map((page: PageType) => {
        return page.projects.map((project) => {
          return (
            <BoardCard key={project.id} data={project} category="projects" />
          );
        });
      })}
    </ProjectListWrapper>
  );
}
