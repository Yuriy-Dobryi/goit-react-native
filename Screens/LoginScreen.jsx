import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useForm } from "react-hook-form";
import CredentialInputs from "./CredentialInputs";
import styles from "./styleSheet";

function LoginScreen() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [focusedField, setFocusedField] = useState(false);
  const [isPasswordHide, setShowPassword] = useState(true);

  function onSubmit(data) {
    console.log(data);
  }
  function togglePasswordShow() {
    setShowPassword(!isPasswordHide);
  }

  return (
    <View style={[styles.form, { paddingTop: 32 }]}>
      <Text style={styles.title}>Увійти</Text>

      {/* email and password inputs */}
      <KeyboardAvoidingView
        style={styles.inputList}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <CredentialInputs
          control={control}
          focusedField={focusedField}
          setFocusedField={setFocusedField}
          isPasswordHide={isPasswordHide}
          togglePasswordShow={togglePasswordShow}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.primaryBtnText}>Увійти</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryBtn}>
        <Text style={styles.secondaryBtnText}>
          Немає акаунту? Зареєструватися
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;