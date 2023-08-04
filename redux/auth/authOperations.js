import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, storage } from "../../config";

const register = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    const { name, email, password, avatarLocalPath } = userData;

    try {
      const avatar = await fetch(avatarLocalPath);
      const blobAvatar = await avatar.blob();
      const blobAvatarLocalPath =
        "photos-of-avatars/" + blobAvatar._data.blobId;

      await uploadBytes(ref(storage, blobAvatarLocalPath), blobAvatar);
      const blobAvatarURL = await getDownloadURL(
        ref(storage, blobAvatarLocalPath)
      );

      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, {
        displayName: name,
        blobAvatarURL,
      });

      return { uid: user.uid, email, name, avatarURL: blobAvatarURL };
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
      const {
        user: { uid, displayName, avatarURL },
      } = await signInWithEmailAndPassword(auth, email, password);

      return {
        uid,
        email,
        name: displayName,
        avatarURL,
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