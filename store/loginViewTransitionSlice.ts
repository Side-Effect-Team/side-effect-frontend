import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PayloadType {
  modalView:
    | "startLogin"
    | "registerNickname"
    | "registerUserInfo"
    | "registerSuccess";
}
const initialState: PayloadType = {
  modalView: "startLogin",
};

const loginViewTransitionSlice = createSlice({
  name: "pageTransition",
  initialState,
  reducers: {
    handleModalView: (state, action: PayloadAction<PayloadType>) => {
      const { modalView } = action.payload;
      state.modalView = modalView;
    },
  },
});
export const { handleModalView } = loginViewTransitionSlice.actions;
export default loginViewTransitionSlice.reducer;
