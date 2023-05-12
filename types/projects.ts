declare interface CommentType {
  commentId: number;
  boardId: number;
  content: string;
  writer: string;
}

// 전체 게시글 조회 API와 게시글 1개 조회 API 반환 값 달라 우선 옵셔널 프로퍼티 부여
declare interface ProjectType {
  id: number;
  headerImage?: string;
  views: number;
  userId: number;
  title: string;
  content: string;
  projectUrl: string;
  imgUrl?: string;
  projectName: string;
  like?: boolean;
  likeNum: number;
  comments?: CommentType[];
  commentNum?: number;
  createdAt?: string;
}
