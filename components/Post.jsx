import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Comment from "../images/comment.png";
import CommentTrue from "../images/comment-true.png";
import Map from "../images/map-pin.png";
import Like from "../images/thumbs.png";

export default function Post({ post }) {
  const navigation = useNavigation();

  return (
    <View key={post.id} style={styles.postContainer}>
      <Image source={post.image} style={styles.postImg} />
      <Text style={styles.postText}>{post.name}</Text>
      <View style={styles.description}>
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <Pressable
            onPress={() =>
              navigation.navigate("CommentScreen", {
                postComments: post.comments,
                postImg: post.image,
              })
            }
          >
            {post.comments.length > 0 ? (
              <View style={styles.commentContainer}>
                <Image source={CommentTrue} style={styles.commentImg} />
                <Text style={{ color: "#212121" }}>{post.comments.length}</Text>
              </View>
            ) : (
              <View style={styles.commentContainer}>
                <Image source={Comment} style={styles.commentImg} />
                <Text style={{ color: "#BDBDBD" }}>{post.comments.length}</Text>
              </View>
            )}
          </Pressable>
          <Pressable onPress={() => console.log("liked")}>
            <View style={styles.commentContainer}>
              <Image source={Like} />
              <Text style={{ color: "#212121" }}>{post.likes}</Text>
            </View>
          </Pressable>
        </View>

        <Pressable
          onPress={() =>
            navigation.navigate("MapScreen", { postLocation: post.location })
          }
        >
          <View style={styles.placeContainer}>
            <Image source={Map} />
            <Text style={styles.placeText}>{post.place}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 32,
  },
  postImg: {
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
    width: "100%",
  },
  postText: {
    color: "#212121",
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commentImg: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  placeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  placeText: {
    color: "#212121",
    fontSize: 16,
    marginLeft: 4,
    textDecorationLine: "underline",
  },
});