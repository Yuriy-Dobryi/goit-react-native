import { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import CredentialInputs from "./CredentialInputs";
import styles from "./styleSheet";
import addBtnImg from '../images/add.png';

const Registration = () => {
  const [userImg, setUserImg] = useState(null);
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

  function togglePasswordShow() {
    setShowPassword(!isPasswordHide);
  }

  return (
    <SafeAreaView style={styles.form}>
      <View style={styles.userPhoto}>
        {userImg && <Image style={styles.addBtn} source={userImg} />}
        <TouchableOpacity
          style={styles.addBtn}
          onPress={userImg ? removeImg : selectImg}
        >
          <Image source={addBtnImg} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Реєстрація</Text>

      <TextInput
        style={[styles.input, focusedField === "name" && styles.inputFocused]}
        onFocus={() => setFocusedField("name")}
        onBlur={() => setFocusedField("")}
        name='name'
        placeholder='Логін'
      />
      <CredentialInputs
        focusedField={focusedField}
        setFocusedField={setFocusedField}
        isPasswordHide={isPasswordHide}
        togglePasswordShow={togglePasswordShow}
      />

      <TouchableOpacity style={styles.primaryBtn}>
        <Text style={styles.primaryBtnText}>Зареєструватися</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryBtn}>
        <Text style={styles.secondaryBtnText}>Вже є акаунт ? Увійти</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Registration;