import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import CredentialInputs from "./CredentialInputs";
import styles from "./styleSheet";

function LoginScreen() {
  const {
    control,
    handleSubmit,
  } = useForm({
    shouldUnregister: true,
    defaultValues: {
      email: "",
      password: "",
    },
  });
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
      <CredentialInputs
        control={control}
        isPasswordHide={isPasswordHide}
        togglePasswordShow={togglePasswordShow}
      />

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
};

export default LoginScreen;