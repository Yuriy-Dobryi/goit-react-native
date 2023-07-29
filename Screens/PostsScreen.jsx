import { View, ScrollView, StyleSheet, Image, Text } from "react-native";
import Post from "../components/Post";
import posts from "../data/postsData";
import userPhoto from "../images/user-photo.jpg";

export default function PostsScreen() {
  return (
      <ScrollView style={styles.container}>
        <View style={styles.profile}>
          <Image source={userPhoto} style={styles.userImage} />
          <View>
            <Text style={styles.userLogin}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <View style={styles.postsList}>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </View>
      </ScrollView>
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