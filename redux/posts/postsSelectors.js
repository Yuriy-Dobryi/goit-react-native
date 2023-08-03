const selectPosts = (state) => state.posts;

const selectPostByID = (id) => (state) => {
  return state.posts.find((postItem) => postItem.id === id);
};

export { selectPosts, selectPostByID };