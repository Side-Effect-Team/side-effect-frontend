import styled from "styled-components";
import { theme } from "../../../styles/Theme";

interface PropsType {
  positionList: string[];
  positionTab: number;
  handlePositionFilterTab: Function;
  apllicantNum: { [key: string]: number };
}

export default function PositionFilterTab({
  positionList,
  positionTab,
  handlePositionFilterTab,
  apllicantNum,
}: PropsType) {
  return (
    <PositionTabList>
      {positionList.map((position, index) => {
        console.log(position);
        return (
          <PositionItem
            className={index === positionTab ? "focused" : ""}
            key={position}
            onClick={() => handlePositionFilterTab(index, position)}
          >
            {position}
            <NumberOfPosition>{apllicantNum[position]}</NumberOfPosition>
          </PositionItem>
        );
      })}
    </PositionTabList>
  );
}
const PositionTabList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 20px 20px;
  overflow: auto;
  overflow-y: hidden;
`;
const PositionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  min-width: fit-content;
  cursor: pointer;
  &.focused {
    font-weight: bold;
    color: ${theme.brandColor.primary};
    border-bottom: 3px solid ${theme.brandColor.primary};
  }
`;
const NumberOfPosition = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  color: black;
  background-color: ${theme.brandColor.lightGray};
`;
