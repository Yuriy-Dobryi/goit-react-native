import { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";

import CredentialInputs from "./CredentialInputs";
import styles from "./styleSheet";
import addBtnImg from '../images/add.png';

const Registration = () => {
  const [userImg, setUserImg] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      email: "",
      password: "",
    },
  });

  async function selectImg() {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      setUserImg(pickerResult.uri);
    }
  }
  function removeImg() {
    setUserImg("");
  }

  function onSubmit(data) {
    console.log(data);
  }

  const [isPasswordHide, setShowPassword] = useState(true);
  function togglePasswordShow() {
    setShowPassword(!isPasswordHide);
  }

  return (
    <View style={styles.form}>
      <View style={styles.userPhoto}>
        {userImg && <Image style={styles.addBtn} source={userImg} />}
        <TouchableOpacity
          style={styles.addBtn}
          onPress={userImg ? removeImg : selectImg}
        >
          <Image source={addBtnImg} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Реєстрація</Text>
      <Controller
        control={control}
        name='login'
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Логін'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.login && <Text>Login is required.</Text>}

      <CredentialInputs
        control={control}
        errors={errors}
        isPasswordHide={isPasswordHide}
        togglePasswordShow={togglePasswordShow}
      />

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.primaryBtnText}>Зареєструватися</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryBtn}>
        <Text style={styles.secondaryBtnText}>Вже є акаунт ? Увійти</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration;