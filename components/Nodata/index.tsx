import { NoDataWrapper, NoDataContent } from "./styled";
import Image from "next/image";
import NoDataSvg from "../../public/images/Nodata.svg";

export default function NoData() {
  return (
    <NoDataWrapper>
      <Image
        src={NoDataSvg}
        alt="검색결과가 존재하지 않습니다."
        width={300}
        height={300}
      />
      <NoDataContent>검색결과가 존재하지 않습니다.</NoDataContent>
    </NoDataWrapper>
  );
}
