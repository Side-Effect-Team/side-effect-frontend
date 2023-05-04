import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PageTransition from "../../components/pages/userInfoPage/PageTransition";
import SelectBox from "../../components/SelectBox";
import {
  Wrapper,
  SelectSection,
  ButtonWrapper,
  InputSection,
  Input,
  Label,
  Form,
} from "../../components/pages/userInfoPage/styled";
import Button from "../../components/Button";

const SELECT_POSITIONS = [
  "프론트엔드",
  "백엔드",
  "디자이너",
  "데브옵스",
  "기획자",
  "마케터",
];
const SELECT_CAREER = [
  // "취업준비생",
  // "신입(0년차)",
  // "주니어(1~3년차)",
  // "미들(4~6년차)",
  // "시니어(7년이상)",
  "0",
  "1~3",
  "4~6",
  "7년 이상 ",
];
interface FormData {
  github: string;
  blog: string;
}
export default function Position() {
  const [position, setPosition] = useState<string | number>("");
  const [career, setCareer] = useState<string | number>("");
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (!career || !position) {
      alert("포지션과 경력은 필수입력 사항입니다.");
    } else {
      const nickname = localStorage.getItem("nickname");
      // api요청 작성
      console.log({ nickname, position, career, ...data });
    }
  };
  return (
    <PageTransition>
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>포지션,경력을 선택해주세요.</h1>
          <SelectSection>
            <SelectBox
              options={SELECT_POSITIONS}
              setValue={setPosition}
              value={position}
              title="포지션"
            />
            <SelectBox
              options={SELECT_CAREER}
              setValue={setCareer}
              value={career}
              title="경력"
            />
          </SelectSection>
          <InputSection>
            <h4>
              깃허브와 블로그 주소는 선택사항입니다.
              <br /> <br />
              깃허브나 블로그 주소를 등록하면 팀에 합류할 확률이 더 높아집니다!
            </h4>
            <Label htmlFor="Github">Github</Label>
            <Input id="Github" {...register("github")} />
            <Label htmlFor="Blog">Blog</Label>
            <Input id="Blog" {...register("blog")} />
          </InputSection>
          <ButtonWrapper>
            <Button type="submit" size="large">
              가입완료
            </Button>
            <Button type="button" size="large" onClick={() => router.back()}>
              Back
            </Button>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </PageTransition>
  );
}
