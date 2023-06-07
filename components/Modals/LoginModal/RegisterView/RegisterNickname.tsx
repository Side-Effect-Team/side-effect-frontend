import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { handleModalView } from "@/store/loginViewTransitionSlice";
import { addNickname } from "@/store/userInfoStoreSlice";
import { Input, Label, ButtonWrapper, Form, ViewWrapper } from "./styled";
import { ANIMATION_DIRECTION } from "enum";
import { duplicateNickname } from "@/apis/UserAPI";
import ErrorMessage from "./ErrorMessage";
import Button from "@/components/Button";
interface FormInput {
  nickname: string;
}
export default function RegisterNickname() {
  const dispatch = useAppDispatch();
  const { direction } = useAppSelector((state) => state.loginView);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    dispatch(addNickname(data.nickname));
    dispatch(
      handleModalView({
        modalView: "registerUserInfo",
      }),
    );
    console.log(errors);
  };
  const validateNickName = async (value: string) => {
    if (value.trim().length === 0) {
      return "닉네임을 작성해주세요.";
    }
    const response = await duplicateNickname(value);
    if (response) {
      return "이미 사용중인 닉네임 입니다.";
    }
    return true;
  };
  const specialCharactersRegex = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]*$/;
  const { onTheLeft, onTheRight, inTheCenter } = ANIMATION_DIRECTION;
  return (
    <ViewWrapper
      initial={direction === "right" ? onTheRight : onTheLeft}
      animate={inTheCenter}
      exit={direction === "right" ? onTheLeft : onTheRight}
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
            pattern: {
              value: specialCharactersRegex,
              message: "특수 문자는 사용할 수 없습니다",
            },
            validate: (value) => validateNickName(value),
          })}
        />
        {errors.nickname && (
          <ErrorMessage>{errors.nickname.message}</ErrorMessage>
        )}
        <ButtonWrapper>
          <Button type="submit" size="large">
            다음
          </Button>
          <Button
            type="button"
            size="large"
            onClick={() =>
              dispatch(
                handleModalView({
                  modalView: "startLogin",
                }),
              )
            }
          >
            뒤로
          </Button>
        </ButtonWrapper>
      </Form>
    </ViewWrapper>
  );
}
