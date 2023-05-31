import { ProjectListWrapper } from "./styled";
import ProjectCard from "@/components/BoardCard/ProjectCard";

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
  return (
    <ProjectListWrapper>
      {data?.pages.map((page: PageType) => {
        return page.projects.map((project) => {
          return (
            <ProjectCard key={project.id} data={project} category="projects" />
          );
        });
      })}
    </ProjectListWrapper>
  );
}
