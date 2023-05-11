import { ScrollToTopWrapper } from "./styled";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function ScrollToTop() {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ScrollToTopWrapper onClick={handleScroll}>
      <AiOutlineArrowUp size={30} />
    </ScrollToTopWrapper>
  );
}
