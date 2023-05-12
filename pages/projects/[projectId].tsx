import { useRouter } from "next/router";
import axios from "axios";
import { Wrapper, Contents } from "@/postComps/common/PageLayout.styled";
import { GetStaticProps, GetStaticPropsContext } from "next";

interface ProjectDetailPageProps {
  project: ProjectPostType;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const router = useRouter();
  console.log(project);

  return (
    <Wrapper>
      <Contents>
        <h1>글 제목</h1>
        <p>자랑 게시글 id: {router.query.recruitId}</p>
      </Contents>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  // 전체 데이터 조회 API 전까지 임시로 size=1000
  const url = `${process.env.NEXT_PUBLIC_API_URL}/free-boards/scroll?size=1000`;

  try {
    const res = await axios.get(url);
    const { data: projects } = res;

    const paths = projects.map((project: ProjectType) => ({
      params: { projectId: project.id + "" },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);

    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const projectId = ctx.params?.projectId;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/free-boards/${projectId}`;
  try {
    const res = await axios.get(url);
    const project = await res.data;

    return {
      props: {
        project,
      },
      revalidate: 1,
    };
  } catch (err) {
    console.log(err);
    // 404 page로 연결
    return { notFound: true };
  }
}
