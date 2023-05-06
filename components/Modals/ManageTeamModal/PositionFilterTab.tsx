import styled from "styled-components";
import { theme } from "../../../styles/Theme";

interface FilterType {
  name: string;
}
interface PropsType {
  positionList: FilterType[];
  positionTab: number;
  handlePositionFilterTab: any;
}

export default function PositionFilterTab({
  positionList,
  positionTab,
  handlePositionFilterTab,
}: PropsType) {
  return (
    <PositionTabList>
      {positionList.map((position, index) => {
        return (
          <PositionItem
            className={index === positionTab ? "focused" : ""}
            key={position.name}
            onClick={() => handlePositionFilterTab(index, position.name)}
          >
            {position.name}
            <NumberOfPosition>1</NumberOfPosition>
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
  padding: 0px 20px;
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
