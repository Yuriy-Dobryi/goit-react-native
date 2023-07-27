import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ImageBackground, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import Home from "./Screens/Home";
import bgImagePath from "./images/mountains-bg.png";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.body}>
      <ImageBackground
        style={styles.bgImage}
        source={bgImagePath}
        resizeMode={"cover"}
      >
        <NavigationContainer>
          <MainStack.Navigator initialRouteName='Home'>
            <MainStack.Screen
              name='Login'
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name='Registration'
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen name='Home' component={Home} options={{ header: false }}/>
          </MainStack.Navigator>
        </NavigationContainer>
      </ImageBackground>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
});