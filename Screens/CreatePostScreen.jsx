import {
  TouchableWithoutFeedback,
  View,
  Pressable,
  Image,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

export default function CreatePostScreen() {
  const [uriImg, setUriImg] = useState(null);
  const allFieldsFilled = false;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>
          {uriImg ? (
            <Image source={{ uri: uriImg }} style={styles.imageWrapper} />
          ) : (
            <View style={styles.imageWrapper}>
              <View style={styles.photoView}>
                <Pressable
                  style={styles.cameraBtn}
                >
                  <FontAwesome name='camera' size={24} color='#BDBDBD' />
                </Pressable>
              </View>
            </View>
          )}
          {uriImg && <Text style={styles.text}>Редагувати фото</Text>}
          {!uriImg && <Text style={styles.text}>Завантажте фото</Text>}
          <View style={styles.inputBox}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder='Назва...'
                placeholderTextColor='#BDBDBD'
                inputMode='text'
              />
            </View>

            <View style={styles.inputWrapper}>
              <Feather name='map-pin' size={24} color='#BDBDBD' />
              <TextInput
                style={styles.input}
                placeholder='Місцевість...'
                placeholderTextColor='#BDBDBD'
                inputMode='text'
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <Pressable
          style={[styles.submitBtn, allFieldsFilled && styles.activeBtn]}
        >
          <Text
            style={[styles.submitBtnText, allFieldsFilled && styles.textActive]}
          >
            Опубліковати
          </Text>
        </Pressable>

        <Pressable
          style={styles.resetBtn}
        >
          <Feather name='trash-2' size={24} color='#BDBDBD' />
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  imageWrapper: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  photoView: {
    backgroundColor: "transparent",
    justifyContent: "center",
    borderRadius: 8,
  },
  cameraImg: {
    width: 24,
    height: 24,
  },
  cameraBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  text: {
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
  },
  inputBox: {
    marginVertical: 32,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 16,
    color: "#212121",
  },
  submitBtn: {
    alignItems: "center",
    padding: 16,
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  activeBtn: {
    backgroundColor: "#FF6C00",
  },
  submitBtnText: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  textActive: {
    color: "#ffffff",
  },
  resetBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});