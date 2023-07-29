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

import CredentialInputs from "../components/CredentialInputs";
import bgImagePath from "../images/mountains-bg.png";
import addIcon from "../images/add-icon.png";
import removeIcon from "../images/remove-icon.png";
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
    const permissionResult = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access image library roll is required!");
      return;
    }
    
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsEditing: true,
    });
    if (!pickerResult.canceled) {
      setUserImg(pickerResult.assets[0].uri);
    }
  }

  function removeImg() {
    setUserImg(null);
  }

  function onSubmit(data) {
    // console.log(data); не забути про trim
    navigate("Home");
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
            style={styles.userPhotoWrapper}
            onPress={userImg ? removeImg : selectImg}
          >
            {userImg && (
              <Image style={styles.userPhoto} source={{ uri: userImg }} />
            )}
            <View style={styles.photoBtnPosition}>
              <Image
                source={userImg ? removeIcon : addIcon}
                style={{ width: 30, height: 30 }}
              />
            </View>
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