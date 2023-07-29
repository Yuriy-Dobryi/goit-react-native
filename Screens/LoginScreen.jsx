import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, View, TouchableOpacity, Text } from "react-native";
import { useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CredentialInputs from "../components/CredentialInputs";
import bgImagePath from "../images/mountains-bg.png";
import styles from "../components/credentialInputsStyles";

function LoginScreen() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [focusedField, setFocusedField] = useState(false);
  const [isPasswordHide, setShowPassword] = useState(true);
  const { navigate } = useNavigation();

  function onSubmit(data) {
    console.log(data);
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
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.primaryBtnText}>Увійти</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
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