import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  updateAvatarURL,
  removeAvatarURL,
} from "./authOperations";

const defaultUserData = {
  uid: "",
  email: "",
  name: "",
  avatarURL: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: { ...defaultUserData },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = { ...defaultUserData };
      })
      .addCase(updateAvatarURL.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload;
      })
      .addCase(removeAvatarURL.fulfilled, (state) => {
        state.user.avatarURL = null;
      });
  },
});

export const authReducer = authSlice.reducer;