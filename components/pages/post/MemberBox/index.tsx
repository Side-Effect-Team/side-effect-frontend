import { useState } from "react";
import { SectionTitle } from "@/postComps/common/Title.styled";
import {
  PartInput,
  MemberHeader,
  AddBtnContainer,
  PositionWrapper,
  PositionContainer,
  NeedsContainer,
} from "./styled";
import Button from "@/components/Button";
import { POSITION_TITLE_LIST } from "../../../../enum";

const POSITION_SELECT_LIST = [
  ...POSITION_TITLE_LIST,
  { name: "직접 입력", value: "etc" },
];

interface PositionProps {
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePosition: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deletePosition: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MemberBox() {
  const [positionInfo, setPositionInfo] = useState({
    id: 0,
    position: "",
    needs: 1,
  });
  const [positionList, setPositionList] = useState<unknown[]>([]);
  const [isDirect, setIsDirect] = useState(false);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "etc") {
      setIsDirect(true);
      return;
    }
    setIsDirect(false);
  };

  const handlePosition = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setPositionInfo({ ...positionInfo, [e.target.name]: e.target.value });
  };

  const addPosition = () => {
    setPositionList((prev) => [...prev, Position]);
  };

  const deletePosition = () => {
    setPositionList((prev) => [...prev]);
  };

  return (
    <div>
      <SectionTitle>
        <h2>모집 인원</h2>
        <div />
      </SectionTitle>
      <div>
        <MemberHeader>
          <span>포지션</span>
          <span>인원</span>
        </MemberHeader>
        {!positionList.length && <p>모집할 포지션을 추가하세요</p>}
        {positionList.map((positionInfo, idx) => (
          <Position
            key={idx}
            handleSelect={handleSelect}
            handlePosition={handlePosition}
            deletePosition={deletePosition}
          />
        ))}
        <AddBtnContainer>
          <Button onClick={addPosition}>추가</Button>
        </AddBtnContainer>
      </div>
    </div>
  );
}

function Position({
  handleSelect,
  handlePosition,
  deletePosition,
}: PositionProps) {
  const [isDirect, setIsDirect] = useState(false);
  return (
    <PositionWrapper>
      <PositionContainer>
        <select name="position" onChange={handleSelect}>
          {POSITION_SELECT_LIST.map((positionTitle) => (
            <option key={positionTitle.value}>{positionTitle.name}</option>
          ))}
        </select>
        {<input />}
      </PositionContainer>
      <NeedsContainer>
        <input type="number" min="0" onChange={handlePosition} />
      </NeedsContainer>
      <button onClick={deletePosition}>삭제</button>
    </PositionWrapper>
  );
}
