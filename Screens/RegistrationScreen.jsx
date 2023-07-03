import { useState } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";

import CredentialInputs from "./CredentialInputs";
// import styles from "./styleSheet";
import addBtnImg from "../images/add.png";

const Registration = () => {
  const [userImg, setUserImg] = useState(null);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [focusedField, setFocusedField] = useState(false);
  const [isPasswordHide, setShowPassword] = useState(true);

  async function selectImg() {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      setUserImg(pickerResult.uri);
    }
  }
  function removeImg() {
    setUserImg("");
  }

  function onSubmit(data) {
    console.log(data);
  }
  function togglePasswordShow() {
    setShowPassword(!isPasswordHide);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder='Username' style={styles.textInput} />
          <CredentialInputs
            control={control}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
            isPasswordHide={isPasswordHide}
            togglePasswordShow={togglePasswordShow}
          />
          <View style={styles.btnContainer}>
            <Button title='Submit' onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});

export default Registration;
