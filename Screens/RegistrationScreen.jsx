import { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";

import CredentialInputs from "./CredentialInputs";
import styles from "./styleSheet";
import addBtnImg from "../images/add.png";

const Registration = () => {
  const [userImg, setUserImg] = useState(null);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
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
    <View style={styles.form}>
      
      <View style={styles.userPhoto}>
        {userImg && <Image style={styles.addBtn} source={userImg} />}
        <TouchableOpacity
          style={styles.addBtn}
          onPress={userImg ? removeImg : selectImg}>
          <Image source={addBtnImg} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Реєстрація</Text>
      
      <KeyboardAvoidingView
        style={styles.inputList}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Controller
          control={control}
          name='login'
          rules={{
            required: true,
          }}
          render={({
            field: { onChange, value },
            fieldState: { isDirty, error },
          }) => (
            <View>
              <TextInput
                style={[styles.input, isDirty && styles.inputFocused]}
                placeholder='Логін'
                onChangeText={onChange}
                value={value}
              />
              {error && (
                <Text style={styles.errorMessage}>Login is required.</Text>
              )}
            </View>
          )}
        />
        {/* email and password inputs */}
        <CredentialInputs
          control={control}
          isPasswordHide={isPasswordHide}
          togglePasswordShow={togglePasswordShow}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.primaryBtnText}>Зареєструватися</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryBtn}>
        <Text style={styles.secondaryBtnText}>Вже є акаунт ? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration;
