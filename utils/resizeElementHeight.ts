import { RefObject } from "react";

// element (주로 textArea)의 height를 텍스트 볼륨에 따라
// 자동으로 resize 하는데 쓰이는 유틸리티 함수
// 조절하고 싶은 element를 ref 객체로 만들고 인자로 넘겨줌
const resizeElementHeight = (refEl: RefObject<any>) => {
  if (refEl.current) {
    refEl.current.style.height = "auto";
    refEl.current.style.height = refEl.current.scrollHeight + "px";
  }
};

export default resizeElementHeight;
