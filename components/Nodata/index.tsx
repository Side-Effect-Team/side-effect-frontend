import { NoDataWrapper, NoDataContent } from "./styeld";
import Image from "next/image";
import NoDataImg from "../../public/images/Nodata.png";
export default function NoData() {
  return (
    <NoDataWrapper>
      <Image
        src={NoDataImg}
        alt="검색결과 가 존재하지않습니다."
        width={350}
        height={350}
      />
      <NoDataContent>검색결과가 존재하지 않습니다.</NoDataContent>
    </NoDataWrapper>
  );
}
