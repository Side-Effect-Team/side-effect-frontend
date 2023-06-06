import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const viewOrder = [
  "startLogin",
  "registerNickname",
  "registerUserInfo",
  "registerSuccess",
];
interface PayloadType {
  modalView:
    | "startLogin"
    | "registerNickname"
    | "registerUserInfo"
    | "registerSuccess";
  direction?: string;
}
const initialState: PayloadType = {
  modalView: "startLogin",
  direction: "",
};

const loginViewTransitionSlice = createSlice({
  name: "pageTransition",
  initialState,
  reducers: {
    handleModalView: (state, action: PayloadAction<PayloadType>) => {
      const { modalView } = action.payload;
      const currentView = viewOrder.indexOf(state.modalView);
      const nextView = viewOrder.indexOf(modalView);
      if (currentView < nextView) {
        state.direction = "right";
      } else {
        state.direction = "left";
      }
      state.modalView = modalView;
    },
  },
});
export const { handleModalView } = loginViewTransitionSlice.actions;
export default loginViewTransitionSlice.reducer;
