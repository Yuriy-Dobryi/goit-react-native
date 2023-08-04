import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/authSelectors";
import transformDate from "../utils/transformDate";
import defaultOwnerAvatar from "../images/default-owner-avatar.png";

export default function CommentItem({ comment }) {
  const { authorID, message, createdAt } = comment;
  const { uid, avatar } = useSelector(selectUser);
  const isPostOwner = authorID === uid;

  return (
    <View
      style={[
        styles.commentItem,
        isPostOwner && { flexDirection: "row-reverse" },
      ]}
    >
      <Image
        source={avatar ? { uri: avatar } : defaultOwnerAvatar}
        style={styles.avatar}
      />
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>{message}</Text>
        <Text style={[styles.date, isPostOwner && { textAlign: "left" }]}>
          {transformDate(createdAt)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentItem: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 16,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 16,
  },
  messageWrapper: {
    width: 300,
    padding: 16,
    rowGap: 8,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
  },
  message: {
    color: "#212121",
    fontSize: 13,
  },
  date: {
    fontSize: 10,
    color: "#BDBDBD",
    textAlign: "right",
  },
});