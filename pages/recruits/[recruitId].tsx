import { useRouter } from "next/router";

export default function RecruitDetailPage() {
  const router = useRouter();

  return (
    <>
      <h1>모집 상세 페이지</h1>
      <p>모집 게시글 id: {router.query.recruitId}</p>
    </>
  );
}
