import customAxios from "./customAxios";
import { NextRouter } from "next/router";
import { RECRUIT_POST_FORM, RECRUIT_POSITION_FORM } from "enum";

export const addLikeRecruit = async (id: number) => {
  const response = await customAxios.post(`/recruit-board/likes/${id}`, null);
  return response;
};

// 상세 게시글 하나 받아오기
export const getRecruitPost = async (postId: string) => {
  const response = await customAxios.get(`/recruit-board/${postId}`);
  return response.data;
};

// 상세 게시글 여러개 받아오기
export const getRecruits = async (
  size: number,
  stackType: string,
  keyword: string,
  lastId: number,
) => {
  let url = `/recruit-board/scroll?size=${size}`;
  if (stackType) url += `&stackTypes=${stackType}`;
  if (keyword.trim().length > 0) url += `&keyword=${keyword.trim()}`;
  if (lastId && lastId > 1) url += `&lastId=${lastId}`;
  const response = await customAxios.get(url);
  return response.data;
};

export const submitRecruitPost = async (
  form: typeof RECRUIT_POST_FORM,
  positions: typeof RECRUIT_POSITION_FORM,
  tags: string[],
  router: NextRouter,
  validatePosition: () => boolean,
) => {
  const newPositions = positions.map(({ positionType, targetNumber }) => ({
    positionType,
    targetNumber: +targetNumber,
  }));

  const data = {
    ...form,
    tags,
    positions: newPositions,
  };

  // request
  const url = `/recruit-board`;
  try {
    const res = await customAxios.post(url, data);
    const recruitId = await res.data.id;
    await window.alert("게시글 등록이 완료되었습니다");
    await router.push(`/recruits/${recruitId}`);
  } catch (err) {
    console.log(err);
    window.alert("게시글 등록에 실패했습니다");
  }
};
