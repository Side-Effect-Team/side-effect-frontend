import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfoType {
  email: string;
  nickname: string;
  providerType: "GOOGLE" | "KAKAO";
}

const initialState: { userInfo: UserInfoType } = {
  userInfo: {
    email: "",
    nickname: "",
    providerType: "GOOGLE" || "KAKAO",
  },
};

const userInfoStoreSlice = createSlice({
  name: "userInfoStore",
  initialState,
  reducers: {
    addEmail: (state, action: PayloadAction<string>) => {
      state.userInfo.email = action.payload;
    },
    addNickname: (state, action: PayloadAction<string>) => {
      state.userInfo.nickname = action.payload;
    },
    addProviderType: (state, action: PayloadAction<"GOOGLE" | "KAKAO">) => {
      state.userInfo.providerType = action.payload;
    },
  },
});

export const { addEmail, addNickname, addProviderType } =
  userInfoStoreSlice.actions;
export default userInfoStoreSlice.reducer;
