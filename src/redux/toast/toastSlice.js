import { createSlice } from "@reduxjs/toolkit";
import { useContext } from "react";
import ToastContext from "../../context/toastContext";

const initialState = {
  openToast: false,
  msg: {
    text: "",
    type: "",
  },
};

const toastSlice = createSlice({

  
  name: "toast",
  initialState,
  reducers: {
    handleOpenToast: (state, action) => {
    console.log(action.payload)
      state.openToast = true;
      state.msg.text = action.payload.text;
      state.msg.type = action.payload.type;

    },
    handleCloseToast: (state, action) => {
      state.openToast = false;
      state.msg = {};
    },
  },
});
export default toastSlice.reducer;
export const { handleOpenToast,handleCloseToast } = toastSlice.actions;
