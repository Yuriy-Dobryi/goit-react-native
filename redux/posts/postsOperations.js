import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  increment,
} from "firebase/firestore";
import { db, storage } from "../../config";

const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const posts = [];
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        const post = { ...doc.data(), id: doc.id };

        posts.push(post);
      });

      return posts;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const addPost = createAsyncThunk(
  "posts/addPost",
  async (newPost, { rejectWithValue }) => {
    try {
      const response = await fetch(newPost.photoURL);
      const photoBlob = await response.blob();

      // await uploadBytes(
      //   ref(storage, "postsImages/" + `${photoBlob.data.blobId}`),
      //   photoBlob
      // );
      // const photoURL = await getDownloadURL(storageRef);
      
      
      await addDoc(collection(db, "posts"), {
        ...newPost,
      });

      return {
        ...newPost,
      };
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, comment }, { rejectWithValue }) => {
    try {
      await updateDoc(doc(db, "posts", postId), {
        comments: arrayUnion({ ...comment }),
      });

      return { postId, comment };
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const addLike = createAsyncThunk(
  "posts/addLike",
  async ({ id }, { rejectWithValue }) => {
    try {
      await updateDoc(doc(db, "posts", id), {
        likesCount: increment(1),
      });

      return id;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export { getAllPosts, addPost, addComment, addLike };