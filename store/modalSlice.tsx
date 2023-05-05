import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalType {
  modalType: string;
}

interface Type {
  modalStore: string[];
  isOpen: boolean;
}
const initialState = {
  modalType: "",
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalType>) => {
      const { modalType } = action.payload;
      state.modalType = modalType;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
