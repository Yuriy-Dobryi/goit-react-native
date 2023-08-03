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
  async (postData, { rejectWithValue }) => {
    try {
      const response = await fetch(postData.image);
      const blobImage = await response.blob();
      const blobImageLocalPath = "photos-of-posts/" + blobImage._data.blobId;

      await uploadBytes(ref(storage, blobImageLocalPath), blobImage);
      const blobImageURL = await getDownloadURL(
        ref(storage, blobImageLocalPath)
      );

      const newPost = {
        ...postData,
        image: blobImageURL,
      };
      const { id } = await addDoc(collection(db, "posts"), newPost);

      return { id, ...newPost };
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