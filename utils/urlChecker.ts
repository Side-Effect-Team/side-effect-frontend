const checkUrl = (url: string) => {
  // http:// 혹은 https:// 로 시작하며
  // .을 제외한 문자 1개 이상
  // .
  // .을 제외한 문자 1개 이상
  // 형태로 url 형태를 체크하는 정규식
  const regex = /^(https?:\/\/)[^.]+\.[^.]+/;
  return regex.test(url);
};

export default checkUrl;
