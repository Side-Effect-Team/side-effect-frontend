import BoardCard, { BoardCardProps } from "@/components/BoardCard";
import { Border, SectionHeaderWrapper, SectionTitle } from "../styled";
import { BoardWrapper } from "./styled";

interface TabBoards {
  boards?: BoardCardProps[] | null;
  title: string;
}

export default function TabBoards({ boards, title }: TabBoards) {
  console.log(boards);
  return (
    <>
      {boards && (
        <SectionHeaderWrapper>
          <SectionTitle>{title}</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
      )}
      <BoardWrapper>
        {boards &&
          boards.map((el, index) => <BoardCard key={index} data={el} />)}
      </BoardWrapper>
    </>
  );
}
