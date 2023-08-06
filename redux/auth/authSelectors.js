const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUser = state => state.auth.user;

const selectUserID = state => state.auth.user.uid;

export { selectIsLoggedIn, selectUser, selectUserID };