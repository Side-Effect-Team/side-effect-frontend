import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { Wrapper, Contents } from "@/postComps/common/PageLayout.styled";
import ContentDetail from "@/detailComps/ContentDetail";
import CommentBox from "@/detailComps/CommentBox";
import PostData from "@/detailComps/PostData";

interface ProjectDetailPageProps {
  project: ProjectType;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
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
  } = project;

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
        />
        <CommentBox boardId={id} comments={comments} />
      </Contents>
    </Wrapper>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const projectId = ctx.params?.projectId;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/free-boards/${projectId}`;
  try {
    const res = await axios.get(url);
    const project = await res.data;

    return {
      props: {
        project,
      },
    };
  } catch (err) {
    console.log(err);
    return { notFound: true };
  }
}
