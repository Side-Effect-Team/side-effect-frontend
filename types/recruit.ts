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
  createdAt: string;
  imgSrc: string;
  positions: PositionType[];
  projectName: string;
  tags: TagType[];
  title: string;
  views: number;
}
