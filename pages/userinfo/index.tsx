import { useRouter } from "next/router";
import styled from "styled-components";
import PageTransition from "../../components/pages/UserInfoPage/PageTransition";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, Variant } from "framer-motion";
interface FormInput {
  nickname: string;
  email: string;
}
const ErrorMessageAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.3 },
};
export default function UserInfoPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    if (Object.keys(errors).length === 0) {
      router.push("/userinfo/position");
    }
  };
  console.log(errors);
  return (
    <PageTransition>
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>안녕하세요!</h1>
          <h2>SideEffect 에서 사용할 닉네임과 이메일을 입력해주세요!</h2>
          <InputSection>
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
              <ErrorMessage variants={ErrorMessageAnimation}>
                {errors.nickname.message}
              </ErrorMessage>
            )}
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "올바른 이메일 주소를 입력해주세요.",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {errors.email.message}
              </ErrorMessage>
            )}
          </InputSection>
          <Button>Next</Button>
        </form>
        <Button type="button" onClick={() => router.push("/")}>
          Home
        </Button>
      </Wrapper>
    </PageTransition>
  );
}
const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
`;

const Label = styled.label`
  text-align: start;
  font-weight: bold;
  margin-right: 15px;
`;
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  border-bottom: 2px solid black;
`;
const Button = styled.button`
  border: none;
  color: white;
  padding: 10px 20px;
  background-color: #5e8aff;
  border-radius: 10px;
  width: 100%;
  margin-top: 25px;
  cursor: pointer;
`;

const ErrorMessage = styled(motion.div)`
  color: ${(p) => p.theme.colors.danger};
`;
