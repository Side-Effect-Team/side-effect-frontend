import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/common/useDebounce";

export default function TestingPage() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 500);

  useEffect(() => {
    console.log(debouncedKeyword);
  }, [debouncedKeyword]);

  return (
    <>
      <h2>Test</h2>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setKeyword(e.target.value)
        }
      />
      <p>{keyword}</p>
    </>
  );
}
