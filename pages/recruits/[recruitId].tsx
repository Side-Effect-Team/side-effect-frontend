import { useRouter } from "next/router";
import { Wrapper, Contents } from "@/postComps/common/PageLayout.styled";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import PositionDetail from "@/detailComps/PositionDetail";

interface RecruitDetailPageProps {
  recruit: RecruitType;
}

export default function RecruitDetailPage({ recruit }: RecruitDetailPageProps) {
  const router = useRouter();
  console.log(recruit);
  const { title, projectName, positions } = recruit;

  return (
    <Wrapper>
      <Contents>
        <h1>{title}</h1>
        <h2>프로젝트명:</h2>
        <p>{projectName}</p>
        <PositionDetail positions={positions} />
      </Contents>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/recruit-board/all`;

  try {
    const res = await axios.get(url);
    const recruits = res.data.recruitBoards;

    const paths = await recruits.map((recruit: RecruitType) => ({
      params: { recruitId: recruit.id + "" },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (err) {
    console.log(err);

    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const recruitId = ctx.params?.recruitId;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/recruit-board/${recruitId}`;

  try {
    const res = await axios.get(url);
    const recruit = await res.data;

    return {
      props: {
        recruit,
      },
      revalidate: 1,
    };
  } catch (err) {
    console.log(err);
    // 404 page로 연결
    return { notFound: true };
  }
}
