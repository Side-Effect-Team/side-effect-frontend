// 게시글 여러개 조회했을 때 반환값(배열)의 원소
declare interface ProjectType {
  id: number;
  headerImage: string;
  title: string;
  content: string;
  createdAt: string;
  like: boolean;
  likeNum: number;
  commentNum: number;
}

// 게시글 하나 조회했을 때 반환값
declare interface ProjectPostType {
  id: number;
  // headerImage: string; // API에 추가 필요
  views: number;
  userId: number;
  title: string;
  content: string;
  projectUrl: string;
  imgUrl: string;
  projectName: string;
  likeNum: number;
  comments: [];
}
