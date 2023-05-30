import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { Wrapper, Contents } from "@/postComps/common/PageLayout.styled";
import PositionDetail from "@/detailComps/PositionDetail";
import ContentDetail from "@/detailComps/ContentDetail";
import PostData from "@/detailComps/PostData";

interface RecruitDetailPageProps {
  recruit: RecruitType;
}

export default function RecruitDetailPage({ recruit }: RecruitDetailPageProps) {
  console.log(recruit);
  const {
    id,
    title,
    projectName,
    positions,
    createdAt,
    views,
    tags,
    content,
    userId,
    likeNum,
    imgSrc,
    writer,
  } = recruit;

  return (
    <Wrapper>
      <Contents>
        <PostData
          postId={id}
          title={title}
          createdAt={createdAt}
          views={views}
          likeNum={likeNum}
          userId={userId}
          writer={writer}
        />
        <PositionDetail positions={positions} />
        <ContentDetail
          projectName={projectName}
          tags={tags}
          content={content}
          imgSrc={imgSrc}
        />
      </Contents>
    </Wrapper>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const recruitId = ctx.params?.recruitId;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/recruit-board/${recruitId}`;

  try {
    const res = await axios.get(url);
    const recruit = await res.data;

    return {
      props: {
        recruit,
      },
    };
  } catch (err) {
    console.log(err);
    return { notFound: true };
  }
}
