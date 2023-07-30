import { View, Text, Image, StyleSheet } from "react-native";

const padStart = (value) => {
  return String(value).padStart(2, "0");
};

export const transformDate = (dateNow) => {
  const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];

  const date = new Date(dateNow);
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const fixedData = year;
  return `${padStart(day)} ${months[month]}, ${year} | ${padStart(
    hour
  )}:${padStart(minutes)}`;
};

export default function Comment({ comment: { isPostOwner, avatar, message, date} }) {

  return (
    <View
      style={[
        styles.container,
        isPostOwner && { flexDirection: "row-reverse" },
      ]}
    >
      <Image source={avatar} style={styles.avatar} />
      <View
        style={[
          styles.messageWrapper,
          isPostOwner && { borderTopRightRadius: 0, borderTopLeftRadius: 6 },
        ]}
      >
        <Text style={styles.message}>{message}</Text>
        <Text style={[styles.date, isPostOwner && { textAlign: "left" }]}>
          {transformDate(date)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  messageWrapper: {
    minWidth: 320,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },
  message: {
    maxWidth: 300,
    fontSize: 13,
  },
  date: {
    paddingTop: 8,

    fontSize: 10,
    color: "#BDBDBD",
    textAlign: "right",
  },
});