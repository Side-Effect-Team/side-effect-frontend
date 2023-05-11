declare global {
  export interface PositionType {
    currentNumber: number;
    id: number;
    positionType: string;
    targetNumber: number;
  }

  export interface TagType {
    stackType: string;
    url: null;
  }

  export interface RecruitType {
    content: string;
    id: number;
    imgSrc: string;
    positions: PositionType[];
    projectName: string;
    tags: TagType[];
    title: string;
    view: number;
  }
}
