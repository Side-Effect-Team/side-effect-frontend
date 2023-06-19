import customAxios from "./customAxios";
import { NextRouter } from "next/router";
import { PROJECT_POST_FORM } from "enum";

export const getProjectData = async (
  page: number,
  filter: string,
  keyword: string,
) => {
  const response = await customAxios.get(
    `/free-boards/scroll?size=8&filter=${filter}&keyword=${keyword}&lastId=${page}`,
  );
  return response.data;
};

// 상세 게시글 하나 받아오기
export const getProjectPost = async (postId: string) => {
  const response = await customAxios.get(`/free-boards/${postId}`);
  return response;
};

// 프로젝트 자랑 글 등록
export const submitProjectPost = async (
  form: typeof PROJECT_POST_FORM,
  uploadImg: Function,
  router: NextRouter,
) => {
  // request
  const url = `/free-boards`;
  try {
    const res = await customAxios.post(url, form);
    const projectId = await res.data.id;
    const imgUrl = url + "/image/" + projectId;

    // image upload
    if (res.status === 200) {
      await uploadImg(imgUrl);
      await window.alert("게시글 등록이 완료되었습니다");
      await router.push(`/projects/${projectId}`);
    }
  } catch (err) {
    console.log(err);
    window.alert("게시글 등록에 실패했습니다");
  }
};

// 프로젝트 자랑 글 수정
export const updateProjectPost = async (
  project: ProjectType,
  updatedForm: typeof PROJECT_POST_FORM,
  uploadImg: Function,
  router: NextRouter,
) => {
  // request
  const data = {
    ...project,
    ...updatedForm,
  };
  const url = `/free-boards/${project.id}`;
  try {
    const res = await customAxios.patch(url, data);
    const projectId = project.id;
    const imgUrl = `/free-boards/image/${projectId}`;

    // image upload
    if (res.status === 200) {
      await uploadImg(imgUrl);
      await window.alert("게시글 수정이 완료되었습니다");
      await router.push(`/projects/${projectId}`);
    }
  } catch (err) {
    console.log(err);
    window.alert("게시글 수정에 실패했습니다");
  }
};
