import { createSlice } from "@reduxjs/toolkit";

interface UserInfoType {
  email: string;
  nickname: string;
}

const initialState: { userInfo: UserInfoType } = {
  userInfo: {
    email: "",
    nickname: "",
  },
};

const userInfoStoreSlice = createSlice({
  name: "userInfoStore",
  initialState,
  reducers: {
    addEmail: (state, action) => {
      state.userInfo.email = action.payload;
    },
    addNickname: (state, action) => {
      state.userInfo.nickname = action.payload;
    },
  },
});

export const { addEmail, addNickname } = userInfoStoreSlice.actions;
export default userInfoStoreSlice.reducer;
