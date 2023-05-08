import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Input,
  Label,
  ButtonWrapper,
  Form,
} from "@/components/pages/userInfoPage/styled";
import PageTransition from "@/components/pages/userInfoPage/PageTransition";
import ErrorMessage from "@/components/pages/userInfoPage/ErrorMessage";
import Button from "@/components/Button";

interface FormInput {
  nickname: string;
}

export default function UserInfoPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    localStorage.setItem("nickname", data.nickname);
    router.push("/userinfo/position");
  };
  console.log(errors);
  return (
    <PageTransition>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>안녕하세요!</h1>
        <h3>Side-Effect에서 사용할 닉네임을 입력해주세요.</h3>
        <Label htmlFor="nickname">닉네임 </Label>
        <Input
          id="nickname"
          {...register("nickname", {
            required: "닉네임을 작성해주세요",
            minLength: {
              value: 2,
              message: "닉네임은 2글자 이상 입력해주세요",
            },
            maxLength: {
              value: 15,
              message: "닉네임은 15글자 이하로 입력해주세요",
            },
          })}
        />
        {errors.nickname && (
          <ErrorMessage>{errors.nickname.message}</ErrorMessage>
        )}
        <ButtonWrapper>
          <Button type="submit" size="large">
            Next
          </Button>
          <Button type="button" size="large" onClick={() => router.push("/")}>
            Home
          </Button>
        </ButtonWrapper>
      </Form>
    </PageTransition>
  );
}
