import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, View, TouchableOpacity, Text } from "react-native";
import { useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/authSelectors";

import CredentialInputs from "../components/CredentialInputs";
import mountainsBgImage from "../images/mountains-bg.png";
import styles from "../components/credentialInputsStyles";
import { logIn } from "../redux/auth/authOperations";

function LoginScreen() {
  const { navigate } = useNavigation();
  const isLoggedIn  = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("Home");
    }
  }, [isLoggedIn]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [focusedField, setFocusedField] = useState(false);
  const [isPasswordHide, setShowPassword] = useState(true);

  function togglePasswordShow() {
    setShowPassword(!isPasswordHide);
  }

  return (
    <ImageBackground style={styles.mountainsBgImage} source={mountainsBgImage}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={styles.container}
      >
        <View style={[styles.form, { paddingTop: 32 }]}>
          <Text style={styles.title}>Увійти</Text>

          <View style={styles.inputList}>
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
            onPress={handleSubmit((data) => dispatch(logIn(data)))}
          >
            <Text style={styles.primaryBtnText}>Увійти</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            hitSlop={{ top: 16, bottom: 32 }}
            onPress={() => navigate("Registration")}
          >
            <Text style={styles.secondaryBtnText}>
              Немає акаунту? Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}

export default LoginScreen;