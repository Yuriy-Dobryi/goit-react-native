import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function MapScreen() {
  const navigation = useNavigation();
  const { canGoBack, goBack, navigate } = navigation;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 16 }}
          onPress={() => (canGoBack() ? goBack() : navigate("Home"))}
        >
          <Feather name='arrow-left' size={24} color='#212121' />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
});