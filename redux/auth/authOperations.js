import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const register = createAsyncThunk(
  "auth/registerUser",
  async (credentials, { rejectWithValue }) => {
    const { name, email, password, photoURL } = credentials;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, {
        displayName: name,
        photoURL,
      });

      return { name: user.displayName, email: user.email, photoURL };
    } catch (error) {
      alert(`RegisterError${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/logInUser",
  async (credentials, { rejectWithValue }) => {
    const { email, password } = credentials;
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      return {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
    } catch (error) {
      alert(`LoginError${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  "auth/logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      alert(`LogoutError${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export { register, logIn, logOut };