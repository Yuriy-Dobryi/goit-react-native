import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: { name: "", email: "", photoURL: "" },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload.user;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload.user;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = { name: "", email: "" };
      });
  },
});

export const authReducer = authSlice.reducer;