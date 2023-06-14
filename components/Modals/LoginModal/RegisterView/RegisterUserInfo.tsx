import { useState } from "react";
import { useForm } from "react-hook-form";
import { handleModalView } from "store/loginViewTransitionSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { ANIMATION_DIRECTION, SELECT_CAREER, SELECT_POSITIONS } from "enum";
import useToast from "hooks/common/useToast";
import axios from "axios";
import SelectBox from "components/SelectBox";
import {
  SelectSection,
  ButtonWrapper,
  InputSection,
  Input,
  Label,
  Form,
  ViewWrapper,
} from "./styled";
import Button from "components/Button";
import { createAuthentication } from "store/authSlice";

interface FormData {
  githubUrl: string;
  blogUrl: string;
}

export default function RegisterUserInfo() {
  const [position, setPosition] = useState<string | number>("");
  const [career, setCareer] = useState<string | number>("");
  const { userInfo } = useAppSelector((state) => state.userInfo);
  const { direction } = useAppSelector((state) => state.loginView);
  const { register, handleSubmit } = useForm<FormData>();
  const { addToast } = useToast();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormData) => {
    if (!career || !position) {
      alert("포지션과 경력은 필수입력 사항입니다.");
    } else {
      const mergedUserInfo = {
        ...userInfo,
        ...data,
        position,
        career,
        password: "",
      };
      await axios
        .post(`/user/join`, mergedUserInfo)
        .then((res) => {
          dispatch(
            createAuthentication({
              token: res.headers.authorization,
              userId: res.data.userId,
            }),
          );
          dispatch(
            handleModalView({
              modalView: "registerSuccess",
            }),
          );
        })
        .catch((error) => {
          console.log(error);
          addToast({
            type: "error",
            title: "회원가입 실패",
            content: "서버가 원활하지않습니다. 고객센터로 문의부탁드립니다.",
          });
        });
    }
  };
  const { onTheLeft, onTheRight, inTheCenter } = ANIMATION_DIRECTION;
  return (
    <ViewWrapper
      initial={direction === "right" ? onTheRight : onTheLeft}
      animate={inTheCenter}
      exit={direction === "right" ? onTheLeft : onTheRight}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>포지션,경력을 선택해주세요.</h1>
        <SelectSection>
          <SelectBox
            options={SELECT_POSITIONS}
            setValue={setPosition}
            title="포지션"
          />
          <SelectBox
            options={SELECT_CAREER}
            setValue={setCareer}
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
          <Input id="Github" {...register("githubUrl")} />
          <Label htmlFor="Blog">Blog</Label>
          <Input id="Blog" {...register("blogUrl")} />
        </InputSection>
        <ButtonWrapper>
          <Button type="submit" size="large">
            가입완료
          </Button>
          <Button
            type="button"
            size="large"
            onClick={() =>
              dispatch(
                handleModalView({
                  modalView: "registerNickname",
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
