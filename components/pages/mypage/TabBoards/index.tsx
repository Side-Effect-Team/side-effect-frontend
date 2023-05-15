import BoardCard, { BoardCardProps } from "@/components/BoardCard";
import { Border, SectionHeaderWrapper, SectionTitle } from "../styled";
import { BoardWrapper, FilterMenu, FilterWrapper, NullMessage } from "./styled";
import { useEffect, useState } from "react";

interface TabBoards {
  boards?: BoardCardProps[] | null;
  title: string;
}

export default function TabBoards({ boards, title }: TabBoards) {
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

  useEffect(() => {
    if (filterMenu === "projects") setFilterBoards(projectsBoards);
    else if (filterMenu === "recruits") setFilterBoards(recruitsBoards);
    else setFilterBoards(boards);
  }, [filterMenu, boards]);

  return (
    <>
      {boards ? (
        <>
          <SectionHeaderWrapper>
            <SectionTitle>{title}</SectionTitle>
            <Border></Border>
          </SectionHeaderWrapper>
          {title !== "applyBoards" && (
            <FilterWrapper>
              <FilterMenu
                onClick={onClickFilterMenu("all")}
                isActive={filterMenu === "all"}
              >
                전체
              </FilterMenu>
              <FilterMenu
                onClick={onClickFilterMenu("projects")}
                isActive={filterMenu === "projects"}
              >
                자랑게시판
              </FilterMenu>
              <FilterMenu
                onClick={onClickFilterMenu("recruits")}
                isActive={filterMenu === "recruits"}
              >
                모집게시판
              </FilterMenu>
            </FilterWrapper>
          )}
          <BoardWrapper>
            {filterBoards &&
              filterBoards.map((el, index) => (
                <BoardCard key={index} data={el} />
              ))}
          </BoardWrapper>
        </>
      ) : (
        <>
          <SectionHeaderWrapper>
            <SectionTitle>{title}</SectionTitle>
            <Border></Border>
          </SectionHeaderWrapper>
          <NullMessage>게시물이 없습니다.</NullMessage>
        </>
      )}
    </>
  );
}
