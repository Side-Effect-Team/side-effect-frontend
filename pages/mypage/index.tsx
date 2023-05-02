import MyPageDetail from "../../components/pages/Mypage";

export default function MyPage() {
  const data = {
    avatarSrc: "/images/ProjectDefaultBackground.png",
    nickname: "자라는개발자",
    introduction:
      "프론트엔드 개발자를 꿈꾸는 취준생입니다. 프로젝트 경험하고 싶어요",
    boards: 1,
    follower: 20,
    following: 30,
    skill: ["typescript", "react", "HTML", "Next.js", "React.native"],
    position: "프론트엔드",
    career: "신입",
    github: "https://github.com",
    blog: "https://www.naver.com",
    portfolio: "https://www.naver.com",
  };
  return <MyPageDetail data={data} />;
}
