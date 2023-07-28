import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";

export default function Post({ post }) {
  const navigation = useNavigation();
  const isAnyComment = post.comments.length > 0;
  const isAnyLike = post.likes > 0;

  return (
    <View key={post.id} style={{ marginBottom: 32 }}>
      <Image source={post.image} style={{ borderRadius: 8 }} />
      <Text style={styles.title}>{post.name}</Text>

      <View style={styles.statistics}>
        <View style={{ flexDirection: "row", gap: 24 }}>
          <Pressable
            onPress={() =>
              navigation.navigate("CommentScreen", {
                postComments: post.comments,
                postImg: post.image,
              })
            }
          >
            <View style={styles.statItem}>
              <FontAwesome
                name={isAnyComment ? "comment" : "comment-o"}
                size={24}
                color={isAnyComment ? "#FF6C00" : "#BDBDBD"}
              />
              <Text style={styles.statText}>{post.comments.length}</Text>
            </View>
          </Pressable>

          {isAnyLike && (
            <Pressable onPress={() => console.log("liked")}>
              <View style={styles.statItem}>
                <AntDesign name='like2' size={24} color='#FF6C00' />
                <Text style={styles.statText}>{post.likes}</Text>
              </View>
            </Pressable>
          )}
        </View>

        <Pressable
          onPress={() =>
            navigation.navigate("MapScreen", { postLocation: post.location })
          }
        >
          <View style={styles.statItem}>
            <Feather name='map-pin' size={24} color='#BDBDBD' />
            <Text
              style={{ ...styles.statText, textDecorationLine: "underline" }}
            >
              {post.place}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 8,
    color: "#212121",
    fontSize: 16,
    fontWeight: 500,
  },
  statistics: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statText: {
    color: "#212121",
    fontSize: 16,
    marginLeft: 6,
  },
});