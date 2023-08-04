import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./authOperations";

const userDefaultData = {
  uid: "",
  email: "",
  name: "",
  avatarURL: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: { ...userDefaultData },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = { ...userDefaultData };
      });
  },
});

export const authReducer = authSlice.reducer;