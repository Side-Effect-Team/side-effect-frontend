import MyPageEditPage from "../../../components/pages/Mypage/Edit";

export default function MyPageEdit() {
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
      {
        title: "*포지션",
        content: "프론트엔드",
        link: false,
        dataTitle: "position",
      },
      {
        title: "*경력",
        content: "취업준비생",
        link: false,
        dataTitle: "career",
      },
      {
        title: "깃허브",
        content: "https://github.com",
        link: true,
        dataTitle: "github",
      },
      {
        title: "블로그",
        content: "https://www.naver.com",
        link: true,
        dataTitle: "blog",
      },
      {
        title: "포트폴리오",
        content: "https://www.naver.com",
        link: true,
        dataTitle: "portfolio",
      },
    ],
  };
  return <MyPageEditPage data={data} />;
}
