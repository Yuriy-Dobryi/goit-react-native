import { useState, useEffect } from "react";
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

import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/authSelectors";
import { register } from "../redux/auth/authOperations";

import CredentialInputs from "../components/CredentialInputs";
import mountainsBgImage from "../images/mountains-bg.png";
import addIcon from "../images/add-icon.png";
import removeIcon from "../images/remove-icon.png";
import styles from "../components/credentialInputsStyles";

const Registration = () => {
  const { navigate } = useNavigation();
  const isLoggedIn  = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const [photoURL, setPhotoURL] = useState(null);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [focusedField, setFocusedField] = useState(false);
  const [isPasswordHide, setShowPassword] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("Home");
    }
  }, [isLoggedIn]);

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
      setPhotoURL(assets[0].uri);
    }
  }

  function removePhoto() {
    setPhotoURL(null);
  }

  function togglePasswordShow() {
    setShowPassword(!isPasswordHide);
  }

  return (
    <ImageBackground style={styles.mountainsBgImage} source={mountainsBgImage}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={styles.container}
      >
        <View style={styles.form}>
          <TouchableOpacity
            style={styles.userPhotoWrapper}
            onPress={photoURL ? removePhoto : selectPhoto}
          >
            {photoURL && (
              <Image style={styles.userPhoto} source={{ uri: photoURL }} />
            )}
            <View style={styles.photoBtnPosition}>
              <Image
                source={photoURL ? removeIcon : addIcon}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </TouchableOpacity>

          <Text style={styles.title}>Реєстрація</Text>

          <View style={styles.inputList}>
            <Controller
              control={control}
              name='name'
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
                      focusedField === "name" && styles.inputFocused,
                    ]}
                    placeholder='Логін'
                    onChangeText={onChange}
                    onFocus={() => setFocusedField("name")}
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
            onPress={handleSubmit((credentialInputs) =>
              dispatch(register({ ...credentialInputs, photoURL }))
            )}
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