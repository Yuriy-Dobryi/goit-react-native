import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";

import CredentialInputs from "../components/CredentialInputs";
import styles from "../components/styleSheet";

function LoginScreen() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [focusedField, setFocusedField] = useState(false);
  const [isPasswordHide, setShowPassword] = useState(true);
  const navigation = useNavigation();

  function onSubmit(data) {
    console.log(data);
    navigation.navigate("Home");
  }
  function togglePasswordShow() {
    setShowPassword(!isPasswordHide);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styless.container}>
        <View style={[styles.form, { paddingTop: 32 }]}>
          <Text style={styles.title}>Увійти</Text>

          {/* email and password inputs */}
          <KeyboardAvoidingView
            style={styles.inputList}
            behavior='padding'
            keyboardVerticalOffset='250'
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
      </View>
    </TouchableWithoutFeedback>
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default LoginScreen;