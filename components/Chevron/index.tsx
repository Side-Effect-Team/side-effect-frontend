import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Wrapper } from "./styled";

interface ChevronProps {
  size?: number;
  direction: "left" | "right";
}

/** 일단 컴포넌트에 쓰이는 셰브론 아이콘을 위해서 만들었지만,
 * 버튼 컴포넌트와 합쳐지거나 아이콘 컴포넌트로 바뀔 수 있음
 * */
const Chevron = ({ size = 35, direction }: ChevronProps) => {
  return (
    <Wrapper size={size}>
      {direction === "left" ? <IoChevronBack /> : <IoChevronForward />}
    </Wrapper>
  );
};

export default Chevron;
