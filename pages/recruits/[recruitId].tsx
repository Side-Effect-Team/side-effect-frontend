import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { Wrapper, Contents } from "@/postComps/common/PageLayout.styled";
import PositionDetail from "@/detailComps/PositionDetail";
import ContentDetail from "@/detailComps/ContentDetail";
import PostData from "@/detailComps/PostData";
import { getRecruitPost } from "@/apis/RecruitBoardAPI";

export default function RecruitDetailPage() {
  const router = useRouter();
  const recruitId = router.query.recruitId as string;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recruitPost"],
    queryFn: () => getRecruitPost(recruitId),
    staleTime: 2000,
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
}
