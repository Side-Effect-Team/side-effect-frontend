import { useRouter } from "next/router";
import { Wrapper, Contents } from "@/postComps/common/PageLayout.styled";
import axios from "axios";
import { GetStaticPropsContext } from "next";

interface RecruitDetailPageProps {
  recruit: RecruitType;
}

export default function RecruitDetailPage({ recruit }: RecruitDetailPageProps) {
  const router = useRouter();

  return (
    <Wrapper>
      <Contents>
        <h1>글 제목</h1>
        <p>모집 게시글 id: {router.query.recruitId}</p>
      </Contents>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/recruit-board/all`;

  try {
    const res = await axios.get(url);
    const { data: recruitBoards } = await res;

    const paths = await recruitBoards.map((recruit: RecruitType) => ({
      params: { recruitId: recruit.id + "" },
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
