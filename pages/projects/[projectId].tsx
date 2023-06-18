import type { GetServerSidePropsContext } from "next";
import { useQuery } from "@tanstack/react-query";
import {
  Wrapper,
  Contents,
} from "components/PostForm/common/PageLayout.styled";
import ContentDetail from "@/detailComps/ContentDetail";
import CommentBox from "@/detailComps/CommentBox";
import PostData from "@/detailComps/PostData";
import { getProjectPost } from "apis/ProjectAPI";

interface ProjectDetailPageProps {
  projectId: string;
}

export default function ProjectDetailPage({
  projectId,
}: ProjectDetailPageProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["projectPost", projectId],
    queryFn: () => getProjectPost(projectId),
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
      comments,
      content,
      createdAt,
      id,
      imgUrl,
      likeNum,
      projectName,
      projectUrl,
      title,
      userId,
      views,
      writer,
      subTitle,
    } = data.data;

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
          <ContentDetail
            projectName={projectName}
            content={content}
            projectUrl={projectUrl}
            imgSrc={imgUrl}
            subTitle={subTitle}
          />
          <CommentBox type="projects" boardId={id} comments={comments} />
        </Contents>
      </Wrapper>
    );
  }
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const projectId = ctx.params?.projectId as string;
  return {
    props: {
      projectId,
    },
  };
}
