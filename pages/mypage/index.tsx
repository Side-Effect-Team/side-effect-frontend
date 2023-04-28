import MyPageDetail from "../../components/pages/Mypage/Detail";

export default function MyPage() {
  const data = {
    avatarSrc: "/img/ProjectDefaultBackground.png",
    nickname: "자라는개발자",
    introduction:
      "프론트엔드 개발자를 꿈꾸는 취준생입니다. 프로젝트 경험하고 싶어요",
    followInfo: [
      { title: "게시물", num: 1 },
      { title: "팔로워", num: 20 },
      { title: "팔로잉", num: 30 },
    ],
    skill: ["typescript", "react", "HTML", "Next.js", "React.native"],
    info: [
      { title: "포지션", content: "프론트엔드" },
      { title: "경력", content: "취업준비생" },
      { title: "깃허브", content: "www.abc.com" },
      { title: "블로그", content: "www.abc.com" },
      { title: "포트폴리오", content: "www.abc.com" },
    ],
  };
  return <MyPageDetail data={data} />;
}
