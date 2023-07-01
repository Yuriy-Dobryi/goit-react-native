import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Controller } from "react-hook-form";
import styles from "./styleSheet";

function CredentialInputs({
  control,
  errors,
  isPasswordHide,
  togglePasswordShow,
}) {

  return (
    <>
      <Controller
        control={control}
        name='email'
        rules={{
          required: true,
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { isTouched  },
        }) => (
          <>
            <TextInput
              style={[styles.input, isTouched && styles.inputFocused]}
              placeholder='Адреса електронної пошти'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
            {errors.email && <Text>Email is required.</Text>}
          </>
        )}
      />

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 50,
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { isTouched },
        }) => (
          <View>
            <TextInput
              style={[
                styles.input,
                styles.lastInput,
                isTouched && styles.inputFocused,
              ]}
              placeholder='Пароль'
              onBlur={onBlur}
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
            {errors.password && <Text>Password is required.</Text>}
          </View>
        )}
        name='password'
      />
    </>
  );
};

export default CredentialInputs;