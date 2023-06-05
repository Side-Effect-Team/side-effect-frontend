import { useAppDispatch } from "@/store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { handleModalView } from "@/store/loginViewTransitionSlice";
import { addNickname } from "@/store/userInfoStoreSlice";
import { Input, Label, ButtonWrapper, Form, ViewWrapper } from "./styled";
import { duplicateNickname } from "@/apis/UserAPI";
import ErrorMessage from "./ErrorMessage";
import Button from "@/components/Button";
interface FormInput {
  nickname: string;
}
export default function RegisterNickname() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    dispatch(addNickname(data.nickname));
    dispatch(handleModalView({ modalView: "registerUserInfo" }));
    console.log(errors);
  };
  const validateNickName = async (value: string) => {
    const response = await duplicateNickname(value);
    if (response) {
      return "이미 사용중인 닉네임 입니다.";
    }
    return true;
  };
  console.log(errors);
  return (
    <ViewWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
            validate: (value) => validateNickName(value),
          })}
        />
        {errors.nickname && (
          <ErrorMessage>{errors.nickname.message}</ErrorMessage>
        )}
        <ButtonWrapper>
          <Button type="submit" size="large">
            Next
          </Button>
          <Button
            type="button"
            size="large"
            onClick={() =>
              dispatch(handleModalView({ modalView: "startLogin" }))
            }
          >
            Back
          </Button>
        </ButtonWrapper>
      </Form>
    </ViewWrapper>
  );
}
