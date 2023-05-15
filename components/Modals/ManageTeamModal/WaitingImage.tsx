import styled from "styled-components";
import Image from "next/image";
import Waiting from "../../../public/images/Waiting.png";

export default function WaitingImage({ filter }: any) {
  return (
    <ImageWrapper>
      <Image
        src={Waiting}
        alt="Waiting team member image"
        width={700}
        height={700}
        layout="responsive"
      />
      <Content>
        {filter === "pending"
          ? "지원자를 기다리고 있어요!"
          : "팀원을 기다리고 있어요!"}
      </Content>
    </ImageWrapper>
  );
}
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Content = styled.p`
  font-weight: bold;
  font-size: x-large;
  position: absolute;
  top: 85%;
`;
