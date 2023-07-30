import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather, FontAwesome } from "@expo/vector-icons";

export default function CreatePostScreen() {
  const [imagePath, setImagePath] = useState(null);
  const isDataFilled = imagePath;

  async function makePhoto() {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access image library roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchCameraAsync({
      quality: 1,
      allowsEditing: true,
      allowsMultipleSelection: false,
    });
    if (!pickerResult.canceled) {
      setImagePath(pickerResult.assets[0].uri);
    }
  }

  function removePhoto() {
    setImagePath(null);
  }

  function resetData() {
    setImagePath(null);
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      keyboardShouldPersistTaps='handled'
    >
      <TouchableOpacity
        style={styles.imgWrapper}
        onPress={imagePath ? removePhoto : makePhoto}
      >
        {imagePath && (
          <Image style={styles.imgSize} source={{ uri: imagePath }} />
        )}

        <View style={[styles.cameraBtn, imagePath && styles.transparent]}>
          <FontAwesome
            name='camera'
            size={24}
            color={imagePath ? "#fff" : "#BDBDBD"}
          />
        </View>
      </TouchableOpacity>

      <Text style={styles.text}>
        {imagePath ? "Редагувати фото" : "Завантажте фото"}
      </Text>
      <View style={styles.inputsList}>
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

      <TouchableOpacity
        style={[styles.submitBtn, isDataFilled && styles.activeBtn]}
      >
        <Text style={[styles.submitBtnText, isDataFilled && styles.activeText]}>
          Опубліковати
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetBtn} onPress={resetData}>
        <Feather name='trash-2' size={24} color='#BDBDBD' />
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  imgWrapper: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  imgSize: {
    width: "100%",
    height: "100%",
  },
  cameraBtn: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  transparent: {
    backgroundColor: "rgba(255, 255, 255, 0.30)",
  },
  text: {
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
  },
  inputsList: {
    rowGap: 16,
    marginVertical: 32,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 16,
    fontWeight: "500",
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
  activeText: {
    color: "#ffffff",
  },
  resetBtn: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});