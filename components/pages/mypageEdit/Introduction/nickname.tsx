import { Input } from "../Info/styled";
import {
  ErrorMessage,
  FiledWrapper,
  IntroductionTitle,
  IntroductionWrapper,
} from "./styled";
import { useEffect } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { duplicateNickname } from "apis/UserAPI";

interface NicknameProps {
  nickname: string;
  register: UseFormRegister<{ nickname: string }>;
  errors: FieldErrors<{ nickname: string }>;
}
export default function Nickname({
  nickname,
  register,
  errors,
}: NicknameProps) {
  // 닉네임 값이 빈값으로 반환되는 문제 해결
  useEffect(() => {
    const inputElement = document.querySelector<HTMLInputElement>("#nickname");
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  const specialCharactersRegex = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]*$/;

  return (
    <IntroductionWrapper>
      <IntroductionTitle>닉네임:</IntroductionTitle>
      <FiledWrapper>
        <Input
          id="nickname"
          placeholder="닉네임을 적어주세요"
          defaultValue={nickname}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}
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
            validate: async (value: string) => {
              if (value.trim().length === 0) {
                return "닉네임을 작성해주세요";
              }
              if (value !== nickname && (await duplicateNickname(value))) {
                return "이미 존재하는 닉네임 입니다.";
              }
              return true;
            },
          })}
        />
        {errors.nickname && (
          <ErrorMessage>{errors.nickname.message}</ErrorMessage>
        )}
      </FiledWrapper>
    </IntroductionWrapper>
  );
}
