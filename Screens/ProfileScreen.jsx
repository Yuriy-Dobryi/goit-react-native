import {
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";

import PostItem from "../components/PostItem";
import { selectUser } from "../redux/auth/authSelectors";
import { selectPostsByOwner } from "../redux/posts/postsSelectors";
import {
  updateAvatarURL,
  removeAvatarURL,
  logOut,
} from "../redux/auth/authOperations";
import mountainsBgImage from "../images/mountains-bg.png";
import addIcon from "../images/add-icon.png";
import removeIcon from "../images/remove-icon.png";

export default function PostsScreen() {
  const { uid, name, avatarURL } = useSelector(selectUser);
  const posts = useSelector(selectPostsByOwner(uid));
  const dispatch = useDispatch();

  async function selectAvatar() {
    const { granted } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("Permission to access of the image library is required!");
      return;
    }

    const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsEditing: true,
      allowsMultipleSelection: false,
    });
    if (!canceled) {
      dispatch(updateAvatarURL(assets[0].uri));
    }
  }

  function removeAvatar() {
    dispatch(removeAvatarURL());
  }

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ImageBackground
        style={styles.mountainsBgImage}
        source={mountainsBgImage}
      >
        <TouchableOpacity
          style={styles.userAvatarWrapper}
          onPress={avatarURL ? removeAvatar : selectAvatar}
        >
          {avatarURL && (
            <Image style={styles.userAvatar} source={{ uri: avatarURL }} />
          )}
          <View style={styles.photoBtn}>
            <Image
              source={avatarURL ? removeIcon : addIcon}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.profile}>
          <TouchableOpacity
            style={styles.logoutBtn}
            hitSlop={{ left: 32, right: 16, top: 32, bottom: 32 }}
            onPress={() => dispatch(logOut())}
          >
            <Feather name='log-out' size={24} color='#BDBDBD' />
          </TouchableOpacity>
          <Text style={styles.userName}>{name}</Text>
          <View style={styles.postsList}>
            {posts.map((post) => {
              return <PostItem key={post.id} post={post} />;
            })}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mountainsBgImage: {
    paddingTop: 120,
  },
  profile: {
    flex: 1,
    paddingTop: 92,
    paddingBottom: 42,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userAvatarWrapper: {
    position: "absolute",
    zIndex: 69,
    top: 120,
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  userAvatar: {
    height: "100%",
    borderRadius: 16,
  },
  photoBtn: {
    position: "absolute",
    zIndex: 69,
    right: -14,
    bottom: 14,
  },
  logoutBtn: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  userName: {
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
  },
  postsList: {
    paddingTop: 32,
  },
});