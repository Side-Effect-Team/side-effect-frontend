import {
  InputBox,
  GuideWrapper,
  LabelForm,
  InputForm,
} from "@/postComps/common/PostForm.styled";

interface ProjectUrlBoxProps {
  projectUrl: string;
  setProjectUrl: Function;
}

export default function ProjectUrlBox({
  projectUrl,
  setProjectUrl,
}: ProjectUrlBoxProps) {
  return (
    <InputBox>
      <GuideWrapper>
        <LabelForm htmlFor="projectUrl">프로젝트 URL</LabelForm>
        <p>배포된 프로젝트 링크를 추가해보세요</p>
      </GuideWrapper>
      <InputForm
        type="url"
        id="projectUrl"
        name="projectUrl"
        placeholder="전체 URL 주소를 입력해주세요"
        value={projectUrl}
        onChange={(e) => setProjectUrl(e.target.value)}
      />
    </InputBox>
  );
}
