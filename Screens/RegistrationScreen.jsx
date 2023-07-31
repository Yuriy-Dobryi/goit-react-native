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
  const [photoPath, setPhotoPath] = useState(null);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [focusedField, setFocusedField] = useState(false);
  const [isPasswordHide, setShowPassword] = useState(true);
  const { navigate } = useNavigation();

  async function selectPhoto() {
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
      setPhotoPath(assets[0].uri);
    }
  }

  function removePhoto() {
    setPhotoPath(null);
  }

  function togglePasswordShow() {
    setShowPassword(!isPasswordHide);
  }

  function onSubmit(data) {
    console.log(data);
    navigate("Home");
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
            onPress={photoPath ? removePhoto : selectPhoto}
          >
            {photoPath && (
              <Image style={styles.userPhoto} source={{ uri: photoPath }} />
            )}
            <View style={styles.photoBtnPosition}>
              <Image
                source={photoPath ? removeIcon : addIcon}
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
            hitSlop={{ top: 16, bottom: 32 }}
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