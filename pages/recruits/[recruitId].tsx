import { useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import {
  Wrapper,
  Contents,
} from "components/PostForm/common/PageLayout.styled";
import PositionDetail from "@/detailComps/PositionDetail";
import ContentDetail from "@/detailComps/ContentDetail";
import PostData from "@/detailComps/PostData";
import { getRecruitPost } from "apis/RecruitBoardAPI";
import CommentBox from "@/detailComps/CommentBox";

interface RecruitDetailPageProps {
  recruitId: string;
}

export default function RecruitDetailPage({
  recruitId,
}: RecruitDetailPageProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recruitPost", recruitId],
    queryFn: () => getRecruitPost(recruitId),
    staleTime: 2000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>데이터를 불러오는데 실패했습니다</h2>;
  }

  if (data) {
    const {
      id,
      title,
      createdAt,
      views,
      likeNum,
      userId,
      writer,
      positions,
      projectName,
      tags,
      content,
      imgSrc,
      comments,
    } = data;
    return (
      <Wrapper>
        <Contents>
          <PostData
            postId={id}
            title={title}
            createdAt={createdAt}
            views={views}
            likeNum={likeNum}
            writerId={userId}
            writer={writer}
          />
          <PositionDetail writerId={userId} positions={positions} />
          <ContentDetail
            projectName={projectName}
            tags={tags}
            content={content}
            imgSrc={imgSrc}
          />
          <CommentBox type="recruits" boardId={id} comments={comments} />
        </Contents>
      </Wrapper>
    );
  }
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const recruitId = ctx.params?.recruitId as string;
  return {
    props: {
      recruitId,
    },
  };
}
