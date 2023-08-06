import { createSelector } from "@reduxjs/toolkit";
import { selectUserID } from "../auth/authSelectors";

const selectPosts = (state) => state.posts;

const selectPostsByOwner = createSelector(
  [selectPosts, selectUserID],
  (posts, uid) => {
    return posts.filter((post) => post.authorID === uid);
  }
);

const selectPostByID = (id) => (state) => {
  return state.posts.find((postItem) => postItem.id === id);
};

export { selectPosts, selectPostsByOwner, selectPostByID };