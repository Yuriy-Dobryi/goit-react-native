import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Controller } from "react-hook-form";
import styles from "./styleSheet";

function CredentialInputs({
  control,
  isPasswordHide,
  togglePasswordShow,
}) {
const keyboardVerticalOffset = Platform.OS === "ios" ? 50 : 0;
  return (
    <KeyboardAvoidingView
      style={styles.inputContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <Controller
        control={control}
        name='email'
        rules={{
          required: true,
        }}
        render={({
          field: { onChange, value },
          fieldState: { isDirty, error },
        }) => (
          <View>
            <TextInput
              style={[styles.input, isDirty && styles.inputFocused]}
              placeholder='Адреса електронної пошти'
              onChangeText={onChange}
              value={value}
            />
            {error && (
              <Text style={styles.errorMessage}>Email is required.</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name='password'
        rules={{
          required: true,
          maxLength: 50,
        }}
        render={({
          field: { onChange, value },
          fieldState: { isDirty, error },
        }) => (
          <View>
            <TextInput
              style={[styles.input, isDirty && styles.inputFocused]}
              placeholder='Пароль'
              onChangeText={onChange}
              value={value}
              secureTextEntry={isPasswordHide}
            />
            <TouchableOpacity
              style={styles.togglePasswordBtn}
              onPress={togglePasswordShow}
            >
              <Text style={styles.secondaryBtnText}>
                {isPasswordHide ? "Показати" : "Сховати"}
              </Text>
            </TouchableOpacity>
            {error && (
              <Text style={styles.errorMessage}>Password is required.</Text>
            )}
          </View>
        )}
      />
    </KeyboardAvoidingView>
  );
};

export default CredentialInputs;