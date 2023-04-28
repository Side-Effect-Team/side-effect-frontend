import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nickname: "",
  email: "",
  position: "",
  github: "",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
});
