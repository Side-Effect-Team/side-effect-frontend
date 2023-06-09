// API 반환값에 createdAt이 없어서 임시로 사용하는 함수
export const getTodayDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return [year, month, day].join("-"); // 2023-05-11
};

export const transformDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return [year, month, day].join("-"); // 2023-05-11
};

export const getBoardDate = (dateString: string) => {
  const date = transformDate(dateString);
  const currentTime = new Date();
  const targetTime = new Date(dateString);
  const timeDifference = Number(currentTime) - Number(targetTime);
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (hoursDifference < 1) {
    return "방금 전";
  } else if (hoursDifference < 24) {
    return `${hoursDifference}시간 전`;
  } else {
    return date;
  }
};
