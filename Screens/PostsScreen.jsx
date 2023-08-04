import { useEffect } from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { selectPosts } from "../redux/posts/postsSelectors";

import PostItem from "../components/PostItem";
import defaultOwnerAvatar from "../images/profile-owner.jpg";
import { getAllPosts } from "../redux/posts/postsOperations";
import { selectUser } from "../redux/auth/authSelectors";

export default function PostsScreen() {
  const { name, email, avatarURL } = useSelector(selectUser);
  console.log(avatarURL);
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      {posts ? (
        <ScrollView style={styles.container}>
          <View style={styles.profile}>
            <Image
              source={avatarURL ? { uri: avatarURL } : defaultOwnerAvatar}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userLogin}>{name}</Text>
              <Text style={styles.userEmail}>{email}</Text>
            </View>
          </View>
          <View style={styles.postsList}>
            {posts.map((post) => {
              return <PostItem key={post.id} post={post} />;
            })}
          </View>
        </ScrollView>
      ) : (
        <View>Loading</View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    marginBottom: 32,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userLogin: {
    color: "#212121",
    fontSize: 13,
  },
  userEmail: {
    color: "#212121",
    fontSize: 11,
  },
  postsList: {
    paddingBottom: 42,
  },
});
