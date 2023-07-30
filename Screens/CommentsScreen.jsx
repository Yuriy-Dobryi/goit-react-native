import { useState, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"; 

import Comment from "../components/Comment";
import posts from "../data/postsData";
import defaultPhoto from "../images/forest.jpg";

export default function CommentsScreen({ route: { params } }) {
  const [photoPath, setPhotoPath] = useState(null);
  const navigation = useNavigation();
  const { canGoBack, goBack, navigate } = navigation;
  const currentPost = posts.find((postItem) => postItem.id === params.postId);
  const isAnyComment = currentPost.comments.length > 0;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 16 }}
          hitSlop={{ left: 16, right: 32 }}
          onPress={() => (canGoBack() ? goBack() : navigate("Home"))}
        >
          <Feather name='arrow-left' size={24} color='#212121' />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.commentContent}>
        <Image
          styles={styles.photo}
          source={photoPath ? { uri: photoPath } : defaultPhoto}
        />
        {!isAnyComment && (
          <Text style={{ color: "#BDBDBD", textAlign: "center" }}>
            Під цим постом поки що немає коментарів.
          </Text>
        )}
        {isAnyComment &&
          currentPost.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder='Коментувати...'
        placeholderTextColor='#BDBDBD'
      />
      <TouchableOpacity>
        <Ionicons
          style={styles.pushBtn}
          name='arrow-up-circle'
          size={34}
          color='#FF6C00'
        />
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    backgroundColor: "#fff",
  },
  commentContent: {
    flex: 1,
    rowGap: 32,
  },
  photo: {
    width: 343,
    height: 240,
  },
  input: {
    alignItems: "flex-end",
    height: 50,
    paddingLeft: 16,

    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 100,
  },
  pushBtn: {
    position: "absolute",
    bottom: 8,
    right: 8,

    borderRadius: 20,
  },
});