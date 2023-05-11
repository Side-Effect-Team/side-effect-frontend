// API 반환값에 createdAt이 없어서 임시로 사용하는 함수
export const getTodayDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return [year, month, day].join("-"); // 2023-05-11
};
