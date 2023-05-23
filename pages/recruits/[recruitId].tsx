import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { Wrapper, Contents } from "@/postComps/common/PageLayout.styled";
import PositionDetail from "@/detailComps/PositionDetail";
import ContentDetail from "@/detailComps/ContentDetail";
import CommentBox from "@/detailComps/CommentBox";
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
  } = recruit;

  return (
    <Wrapper>
      <Contents>
        <PostData
          id={id}
          title={title}
          createdAt={createdAt}
          views={views}
          likeNum={likeNum}
        />
        <PositionDetail positions={positions} />
        <ContentDetail
          projectName={projectName}
          tags={tags}
          content={content}
          imgSrc={imgSrc}
        />
        <CommentBox />
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
