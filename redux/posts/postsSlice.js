import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, addPost, addComment, addLike } from "./postsOperations";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
      })
      .addCase(addPost.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.posts.push('1');
      })
      .addCase(addComment.fulfilled, (state, { payload }) => {
        const postIndex = state.posts.findIndex(
          (post) => post.id === payload.postId
        );
        state.posts[postIndex].comments.push(payload.comment);
      })
      .addCase(addLike.fulfilled, (state, { payload }) => {
        const postIndex = state.posts.findIndex((post) => post.id === payload);
        state.posts[postIndex].likesCount += 1;
      }),
});

export const postsReducer = postsSlice.reducer;