import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import Home from "./Screens/Home";
import CommentsScreen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";;
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
          <MainStack.Navigator initialRouteName='Registration'>
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
            <MainStack.Screen
              name='Home'
              component={Home}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name='CommentsScreen'
              component={CommentsScreen}
              options={{
                title: "Коментарі",
                headerStyle: {
                  backgroundColor: "#FFFFFF",
                },
                headerTitleStyle: {
                  fontWeight: 500,
                  fontSize: 17,
                  lineHeight: 22,
                },
              }}
            />
            <MainStack.Screen
              name='MapScreen'
              component={MapScreen}
              options={{
                title: "Карта",
                headerStyle: {
                  backgroundColor: "#FFFFFF",
                },
                headerTitleStyle: {
                  fontWeight: 500,
                  fontSize: 17,
                  lineHeight: 22,
                },
              }}
            />
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