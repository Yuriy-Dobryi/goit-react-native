import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    position: "relative",
    paddingTop: 92,
    paddingRight: 16,
    paddingBottom: 10,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  userPhoto: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  photoBtnPosition: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },

  title: {
    marginBottom: 32,
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
  },

  inputList: {
    rowGap: 16,
  },
  input: {
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  errorMessage: {
    position: "absolute",
    left: 4,
    bottom: 0,
    color: "red",
  },
  togglePasswordBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },

  primaryBtn: {
    alignItems: "center",
    marginTop: 43,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  secondaryBtn: {
    paddingTop: 16,
    paddingBottom: 32,
    alignItems: "center",
  },
  secondaryBtnText: {
    color: "#1B4371",
  },
});

export default styles;