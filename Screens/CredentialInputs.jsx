import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styleSheet";

function CredentialInputs({
  focusedField,
  setFocusedField,
  isPasswordHide,
  togglePasswordShow,
}) {
  return (
    <>
      <TextInput
        style={[styles.input, focusedField === "email" && styles.inputFocused]}
        onFocus={() => setFocusedField("email")}
        onBlur={() => setFocusedField("")}
        name='email'
        placeholder='Адреса електронної пошти'
      />

      <View>
        <TextInput
          style={[
            styles.input,
            styles.lastInput,
            focusedField === "password" && styles.inputFocused,
          ]}
          onFocus={() => setFocusedField("password")}
          onBlur={() => setFocusedField("")}
          name='password'
          secureTextEntry={isPasswordHide}
          placeholder='Пароль'
        />
        <TouchableOpacity
          style={styles.togglePasswordBtn}
          onPress={togglePasswordShow}
        >
          <Text style={styles.secondaryBtnText}>
            {isPasswordHide ? "Показати" : "Сховати"}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CredentialInputs;