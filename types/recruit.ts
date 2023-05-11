declare interface PositionType {
  currentNumber: number;
  id: number;
  positionType: string;
  targetNumber: number;
}

declare interface TagType {
  stackType: string;
  url: null;
}

declare interface RecruitType {
  content: string;
  id: number;
  imgSrc: string;
  positions: PositionType[];
  projectName: string;
  tags: TagType[];
  title: string;
  view: number;
}
