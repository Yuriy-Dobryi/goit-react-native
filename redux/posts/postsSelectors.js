const selectPosts = (state) => state.posts;

const selectPostsByOwner = (uid) => (state) => {
  return state.posts.filter((post) => post.authorID === uid);
};

const selectPostByID = (id) => (state) => {
  return state.posts.find((postItem) => postItem.id === id);
};

export { selectPosts, selectPostsByOwner, selectPostByID };