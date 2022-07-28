import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useContext } from "react";
import ToastContext from "../../context/toastContext";
import { handleOpenToast } from "../toast/toastSlice";
import { customApi } from "../../utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeToLocalStorage,
} from "../../utils/locatStorage";

const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  sidebarOpen: false,
};
export const registerUser = createAsyncThunk(
  "registerUser",
  async (user, thunkApi) => {
    try {
      let res = await customApi.post("/auth/register", user);
      
      // thunkApi.dispatch(handleOpenToast( `welcome ${res.data.user.name}`,"succ"));
      return res.data;
    } catch (error) {
      // thunkApi.dispatch(handleOpenToast(error.response.data.msg,"danger"));
   
    }
  }
);
export const loginUser = createAsyncThunk(
  "loginUser",
  async (user, thunkApi) => {
    try {
      let res = await customApi.post("/auth/login", user);
      // thunkApi.dispatch(handleOpenToast( `welcome back ${res.data.user.name}`,"succ"));
      return res.data;
    } catch (error) {
      // thunkApi.dispatch(handleOpenToast(error.response.data.msg,"danger"));
      console.log(error);
    }
  }
);
export const updateUser = createAsyncThunk(
  "updateUser",
  async (user, thunkApi) => {
    try {
      let res = await customApi.patch("/auth/updateUser", user );
      return res.data;
    } catch (error) {

      //if you get 401 here the you should dispathc logout action
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.sidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
    logoutUser: (state) => {
      state.user = null;
      state.sidebarOpen = false;

      removeToLocalStorage();
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      addUserToLocalStorage(user);
      state.isLoading = false;
      state.user = user;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      const { user } = payload;
      addUserToLocalStorage(user);

      state.isLoading = false;
      state.user = user;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);

   
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});
export default userSlice.reducer;
export const { openSidebar, closeSidebar, logoutUser } = userSlice.actions;
