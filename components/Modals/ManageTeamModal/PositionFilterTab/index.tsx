import { PositionTabList, PositionItem, NumberOfPosition } from "./styled";

interface PropsType {
  positionList: string[];
  positionTabIndex: number;
  handlePositionFilterTab: Function;
  apllicantNum: { [key: string]: number };
}

export default function PositionFilterTab({
  positionList,
  positionTabIndex,
  handlePositionFilterTab,
  apllicantNum,
}: PropsType) {
  return (
    <PositionTabList>
      {positionList.map((position, index) => {
        return (
          <PositionItem
            className={index === positionTabIndex ? "focused" : ""}
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
