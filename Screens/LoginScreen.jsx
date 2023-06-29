import { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import CredentialInputs from "./CredentialInputs";
import styles from "./styleSheet";

const LoginScreen = () => {
  const [focusedField, setFocusedField] = useState(false);
  const [isPasswordHide, setShowPassword] = useState(true);

  function togglePasswordShow() {
    setShowPassword(!isPasswordHide);
  }

  return (
    <SafeAreaView style={[styles.form, { paddingTop: 32 }]}>
      <Text style={styles.title}>Увійти</Text>

      {/* email and password inputs */}
      <CredentialInputs
        focusedField={focusedField}
        setFocusedField={setFocusedField}
        isPasswordHide={isPasswordHide}
        togglePasswordShow={togglePasswordShow}
      />

      <TouchableOpacity style={styles.primaryBtn}>
        <Text style={styles.primaryBtnText}>Увійти</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryBtn}>
        <Text style={styles.secondaryBtnText}>
          Немає акаунту? Зареєструватися
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;