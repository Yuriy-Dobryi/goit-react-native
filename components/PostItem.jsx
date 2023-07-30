import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";

export default function PostItem({ post }) {
  const { id, image, name, comments, likes, place, location } = post;

  const { navigate } = useNavigation();
  const isAnyComment = comments.length > 0;
  const isAnyLike = likes > 0;

  return (
    <View style={styles.postItem}>
      <Image source={image} style={styles.picture} />
      <Text style={styles.title}>{name}</Text>

      <View style={styles.info}>
        <View style={styles.statistics}>
          <TouchableOpacity
            style={styles.statItem}
            onPress={() =>
              navigate("CommentsScreen", {
                postId: id,
              })}
          >
            <FontAwesome
              name={isAnyComment ? "comment" : "comment-o"}
              size={24}
              color={isAnyComment ? "#FF6C00" : "#BDBDBD"}
            />
            <Text
              style={[styles.statText, !isAnyComment && styles.transparent]}
            >
              {comments.length}
            </Text>
          </TouchableOpacity>

          {isAnyLike && (
            <TouchableOpacity
              style={styles.statItem}
              onPress={() => console.log("liked")}
            >
              <AntDesign name='like2' size={24} color='#FF6C00' />
              <Text style={styles.statText}>{likes}</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          style={styles.statItem}
          onPress={() => navigate("MapScreen", { postLocation: location })}
        >
          <Feather name='map-pin' size={24} color='#BDBDBD' />
          <Text style={[styles.statText, styles.underline]}>{place}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postItem: {
    marginBottom: 32,
  },
  picture: {
    borderRadius: 8,
  },
  title: {
    marginVertical: 8,
    color: "#212121",
    fontSize: 16,
    fontWeight: 500,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statistics: {
    flexDirection: "row",
    columnGap: 24,
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
  transparent: {
    color: "#BDBDBD",
  },
  underline: {
    textDecorationLine: "underline",
  },
});