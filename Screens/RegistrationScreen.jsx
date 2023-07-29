import { useState } from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";

import CredentialInputs from "../components/CredentialInputs";
import bgImagePath from "../images/mountains-bg.png";
import styles from "../components/credentialInputsStyles";

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
  const { navigate } = useNavigation();

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
    <ImageBackground style={styles.bgImage} source={bgImagePath}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={styles.container}
      >
        <View style={styles.form}>
          <TouchableOpacity
            style={styles.userPhoto}
            onPress={userImg ? removeImg : selectImg}
          >
            {userImg && <Image source={userImg} />}
            <Ionicons
              name={userImg ? "close-circle" : "add-circle-outline"}
              size={25}
              color={userImg ? "#1B4371" : "#FF6C00"}
              style={styles.photoBtnPosition}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Реєстрація</Text>

          <View style={styles.inputList}>
            <Controller
              control={control}
              name='login'
              rules={{
                required: true,
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <View>
                  <TextInput
                    style={[
                      styles.input,
                      focusedField === "login" && styles.inputFocused,
                    ]}
                    placeholder='Логін'
                    onChangeText={onChange}
                    onFocus={() => setFocusedField("login")}
                    onBlur={() => setFocusedField("")}
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
              focusedField={focusedField}
              setFocusedField={setFocusedField}
              isPasswordHide={isPasswordHide}
              togglePasswordShow={togglePasswordShow}
            />
          </View>

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.primaryBtnText}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigate("Login")}
          >
            <Text style={styles.secondaryBtnText}>Вже є акаунт ? Увійти</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Registration;