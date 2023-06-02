import ApplyBoardCard, {
  ApplyBoardCardProps,
} from "@/components/Card/ApplyCard";
import { FilterMenu, FilterWrapper, NullMessage } from "../TabBoards/styled";
import { ApplyBoardWrapper } from "./styled";
import { useEffect, useState } from "react";
import SectionBorder from "@/components/Boarder/SectionBorder";

interface TabApplyBoardsProps {
  boards?: ApplyBoardCardProps[] | null;
  title: string;
}

export default function TabApplyBoards({ boards, title }: TabApplyBoardsProps) {
  const [filterMenu, setFilterMenu] = useState("all");
  const [filterBoards, setFilterBoards] = useState(boards);

  const openBoards = boards?.filter((boards) => boards.closed === false);
  const closedBoards = boards?.filter((boards) => boards.closed === true);

  const onClickFilterMenu = (type: string) => () => {
    if (type === "open") setFilterMenu("open");
    else if (type === "closed") setFilterMenu("closed");
    else setFilterMenu("all");
  };

  const filterMenuTap = [
    { type: "all", label: "전체" },
    { type: "open", label: "모집중" },
    { type: "closed", label: "모집완료" },
  ];

  useEffect(() => {
    if (filterMenu === "open") setFilterBoards(openBoards);
    else if (filterMenu === "closed") setFilterBoards(closedBoards);
    else setFilterBoards(boards);
  }, [filterMenu, boards]);

  return (
    <>
      <SectionBorder title={title} />
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
      {filterBoards?.length !== 0 ? (
        <ApplyBoardWrapper>
          {filterBoards?.map((el) => (
            <ApplyBoardCard key={el.applicationId} data={el} />
          ))}
        </ApplyBoardWrapper>
      ) : (
        <NullMessage>게시물이 없습니다.</NullMessage>
      )}
    </>
  );
}
