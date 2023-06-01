import ProjectCard, {
  BoardCardProps,
} from "@/components/BoardCard/ProjectCard";
import { Border, SectionHeaderWrapper, SectionTitle } from "../styled";
import { BoardWrapper, FilterMenu, FilterWrapper, NullMessage } from "./styled";
import { useEffect, useState } from "react";
import RecruitCard from "@/components/BoardCard/RecruitCard";

interface TabBoards {
  boards?: BoardCardProps[] | null;
  title: string;
  activeTab: string;
}

export default function TabBoards({ boards, title, activeTab }: TabBoards) {
  const [filterMenu, setFilterMenu] = useState("all");
  const [filterBoards, setFilterBoards] = useState(boards);

  const projectsBoards = boards?.filter(
    (boards) => boards.category === "projects",
  );
  const recruitsBoards = boards?.filter(
    (boards) => boards.category === "recruits",
  );

  const onClickFilterMenu = (type: string) => () => {
    if (type === "projects") setFilterMenu("projects");
    else if (type === "recruits") setFilterMenu("recruits");
    else setFilterMenu("all");
  };

  const filterMenuTap = [
    { type: "all", label: "전체" },
    { type: "projects", label: "자랑게시판" },
    { type: "recruits", label: "모집게시판" },
  ];

  useEffect(() => {
    if (filterMenu === "projects") setFilterBoards(projectsBoards);
    else if (filterMenu === "recruits") setFilterBoards(recruitsBoards);
    else setFilterBoards(boards);
  }, [filterMenu, boards]);

  useEffect(() => {
    setFilterMenu("all");
  }, [activeTab]);

  return (
    <>
      <SectionHeaderWrapper>
        <SectionTitle>{title}</SectionTitle>
        <Border></Border>
      </SectionHeaderWrapper>
      <FilterWrapper>
        {filterMenuTap.map((filter) => (
          <FilterMenu
            key={filter.type}
            onClick={onClickFilterMenu(filter.type)}
            isActive={filterMenu === filter.type}
          >
            {filter.label}
          </FilterMenu>
        ))}
      </FilterWrapper>
      {boards?.length !== 0 ? (
        <BoardWrapper>
          {/* {filterBoards &&
            filterBoards.map((el, index) => (
              <BoardCard key={index} data={el} category={el.category || ""} />
            ))} */}
          {filterBoards &&
            filterBoards.map((el, index) =>
              el.category === "projects" ? (
                <ProjectCard
                  key={index}
                  data={el}
                  category={el.category || ""}
                />
              ) : (
                <RecruitCard key={index} data={el} />
              ),
            )}
        </BoardWrapper>
      ) : (
        <NullMessage>게시물이 없습니다.</NullMessage>
      )}
    </>
  );
}
