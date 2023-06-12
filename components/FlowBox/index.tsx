import { FlowContainer, FlowWrapper, IconWrapper } from "./styled";
import Lightning from "../../public/images/lightningIcon.svg";
import { useTheme } from "styled-components";

export default function FlowBox() {
  const theme = useTheme();

  return (
    <FlowContainer>
      {Array(15)
        .fill(1)
        .map((el, index) => (
          <FlowWrapper key={index}>
            <p>SIDE EFFECT</p>
            <IconWrapper>
              <Lightning fill={theme.mainBackGround} height="100%" />
            </IconWrapper>
          </FlowWrapper>
        ))}
    </FlowContainer>
  );
}
