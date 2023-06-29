import { View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styleSheet";
import Registration from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import imagePath from "../images/mountains-bg.png";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.postScreenBG} source={imagePath}>
        {/* <Registration /> */}
        <LoginScreen />
      </ImageBackground>
      <StatusBar style='auto' />
    </View>
  );
};

export default PostsScreen;