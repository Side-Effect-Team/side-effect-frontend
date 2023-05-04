import { useRouter } from "next/router";

export default function ProjectDetailPage() {
  const router = useRouter();

  return (
    <>
      <h1>프로젝트 자랑 게시글</h1>
      <p>자랑 게시글 id: {router.query.projectId}</p>
    </>
  );
}
