export const BOARD_LIST = [
  {
    ID: 0,
    TITLE: "프로젝트 자랑 게시판",
    LINK: "/projects",
  },
  {
    ID: 1,
    TITLE: "팀원 모집 게시판",
    LINK: "/recruits",
  },
];

export const CAROUSEL_CONTENTS_LIST = [
  {
    ID: 0,
    TITLE: "여기는 타이틀1 입니다",
    SUB_TITLE: "그리고 여기는 서브타이틀1 입니다",
    IMAGE: "./images/sample1.svg",
    BACKGROUND_COLOR: "tomato",
  },
  {
    ID: 1,
    TITLE: "여기는 타이틀2 입니다",
    SUB_TITLE: "그리고 여기는 서브타이틀2 입니다",
    IMAGE: "./images/sample2.svg",
    BACKGROUND_COLOR: "teal",
  },
  {
    ID: 2,
    TITLE: "여기는 타이틀3 입니다",
    SUB_TITLE: "그리고 여기는 서브타이틀3 입니다",
    IMAGE: "./images/sample3.svg",
    BACKGROUND_COLOR: "thistle",
  },
];

export const BANNER_CONTENTS = {
  TITLE: "열정을 나눌 팀원을 모집하세요",
  SUB_TITLE:
    "프로젝트 팀원을 모집하거나 관심있는 프로젝트에 지원할 수 있습니다",
};

export const POSITION_LIST = [
  {
    name: "프론트엔드",
    value: "frontend",
  },
  {
    name: "백엔드",
    value: "backend",
  },
  {
    name: "디자이너",
    value: "designer",
  },
  {
    name: "데브옵스",
    value: "devops",
  },
  {
    name: "마케터",
    value: "marketer",
  },
  {
    name: "기획자",
    value: "pm",
  },
];
export const CAREER_LIST = [
  { name: "취업준비생", value: "empty" },
  { name: "신입(0년차)", value: "new" },
  { name: "주니어(1~3년차)", value: "junior" },
  { name: "미들(4~6년차)", value: "middle" },
  { name: "시니어(7년이상)", value: "sinior" },
];
export const SELECT_POSITIONS = [
  { name: "프론트엔드", value: "FRONTEND" },
  { name: "백엔드", value: "BACKEND" },
  { name: "디자이너", value: "DESIGNER" },
  { name: "데브옵스", value: "DEVOPS" },
  { name: "기획자", value: "PM" },
  { name: "마케터", value: "MARKETER" },
];
export const SELECT_CAREER = [
  { name: "취업준비생", value: "empty" },
  { name: "신입(0년차)", value: "new" },
  { name: "주니어(1~3년차)", value: "junior" },
  { name: "미들(4~6년차)", value: "middle" },
  { name: "시니어(7년이상)", value: "senior" },
];
export const DEFAULT_PROJECT_CARD_IMAGE = "/images/ProjectBackground.png";

export const ANIMATION_DIRECTION = {
  onTheRight: { x: "50%", opacity: 0 },
  inTheCenter: { x: 0, opacity: 1 },
  onTheLeft: { x: "-50%", opacity: 0 },
};

export const SKILL_LIST_IN_FILTER = [
  {
    name: "전체",
    value: "",
  },
  {
    name: "JavaScript",
    value: "javascript",
  },
  {
    name: "TypeScript",
    value: "typescript",
  },
  {
    name: "React",
    value: "react",
  },
  {
    name: "Vue.js",
    value: "vue",
  },
  {
    name: "Svelte",
    value: "svelte",
  },
  {
    name: "Next.js",
    value: "nextjs",
  },
  {
    name: "NestJS",
    value: "nestjs",
  },
  {
    name: "Node.js",
    value: "nodejs",
  },
  {
    name: "Java",
    value: "java",
  },
  {
    name: "Spring",
    value: "spring",
  },
  {
    name: "Go",
    value: "go",
  },
] as const;

export const PROJECT_POST_FORM = {
  title: "",
  projectName: "",
  subTitle: "",
  projectUrl: "",
  content: "",
};

export const RECRUIT_POST_FORM = {
  title: "",
  projectName: "",
  content: "",
};

// 포지션 기본값
export const RECRUIT_POSITION_FORM = [
  {
    id: 1,
    positionType: "frontend",
    targetNumber: 0,
  },
];
