interface PositionDetailProps {
  positions: PositionType[];
}

export default function PositionDetail({ positions }: PositionDetailProps) {
  return (
    <>
      <h2>포지션 상세</h2>
      {positions.map((position) => (
        <div key={position.id}>
          <div>
            <span>포지션</span>
            <span>{position.positionType}</span>
          </div>
          <div>
            <span>모집 인원</span>
            <span>{position.targetNumber}</span>
          </div>
          <div>
            <span>현재 인원</span>
            <span>{position.currentNumber}</span>
          </div>
        </div>
      ))}
    </>
  );
}
