import {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  FocusEventHandler,
  FormEvent,
} from "react";

interface PostFormType {
  projectName: string;
  title: string;
  content: string;
  projectSubTitle?: string;
}

interface UseFormProps {
  initialVals: PostFormType;
  validate: Function;
  onSubmit: Function;
}

export const useForm = ({ initialVals, validate, onSubmit }: UseFormProps) => {
  const initialTouched = { ...initialVals };
  for (const key in initialTouched) {
    // @ts-ignore
    initialTouched[key] = false;
  }
  // form data, 에러 메시지, 입력이 발생한 필드
  const [postForm, setPostForm] = useState({ ...initialVals });
  const [errMsgs, setErrMsgs] = useState({ ...initialVals });
  const [touched, setTouched] = useState({ ...initialTouched });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  };

  const handleBlur: FocusEventHandler = (e) => {
    const { name } = e.target as HTMLInputElement;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTouched = { ...initialTouched };
    for (const key in newTouched) {
      // @ts-ignore
      newTouched[key] = true;
    }
    setTouched(newTouched);
    const newErrMsgs = runValidator();
    setErrMsgs(newErrMsgs);
    if (Object.values(errMsgs).some((err) => err)) return;
    // 폼 검증 후 실행할 함수
    onSubmit();
  };

  const runValidator = useCallback(() => validate(postForm), [postForm]);

  useEffect(() => {
    const newErrMsgs = runValidator();
    setErrMsgs(newErrMsgs);
  }, [runValidator]);

  return {
    postForm,
    errMsgs,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
