import { FlowContainer, FlowWrapper, LightningSvg } from "./styled";

export default function FlowBox() {
  return (
    <FlowContainer>
      {Array(15)
        .fill(1)
        .map((el, index) => (
          <FlowWrapper key={index}>
            <p>SIDE EFFECT</p>
            <LightningSvg src="/images/lightningIcon.svg" />
          </FlowWrapper>
        ))}
    </FlowContainer>
  );
}
