import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Pressable, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import CreatePostScreen from "./CreatePostScreen";
import ProfileScreen from "./ProfileScreen";
import LogOutIcon from "../images/log-out.png";
import GoBackIcon from "../images/go-back.png";

const Tabs = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();

  const onLogout = () => {
    navigation.navigate("Login");
  };

  const onReturn = () => {
    navigation.navigate("PostsScreen");
  };

  const postScreenOptions = {
    title: "Публікації",
    headerStyle: {
      backgroundColor: "#ffffff",
      shadowColor: "rgba(0,0,0,0.3)",
      height: 88,
    },
    headerTintColor: "#212121",
    headerTitleStyle: {
      marginLeft: 110,
      fontFamily: "Roboto-Medium",
      fontSize: 22,
    },
    headerRight: () => (
      <Pressable style={styles.logOutBtn} onPress={onLogout}>
        <Image source={LogOutIcon} style={styles.icon} />
      </Pressable>
    ),
  };

  const createPostScreenOptions = {
    title: "Створити публікацію",
    headerStyle: {
      backgroundColor: "#ffffff",
      shadowColor: "rgba(0,0,0,0.3)",
      height: 88,
    },
    headerTintColor: "#212121",
    headerTitleStyle: {
      marginLeft: 25,
      fontFamily: "Roboto-Medium",
      fontSize: 22,
    },
    tabBarHideOnKeyboard: "true",
    tabBarStyle: {
      height: 0,
    },
    headerLeft: () => (
      <Pressable style={styles.goBackBtn} onPress={onReturn}>
        <Image source={GoBackIcon} style={styles.icon} />
      </Pressable>
    ),
  };

  return (
    <Tabs.Navigator
      initialRouteName='PostScreen'
      backBehavior='order'
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#FFFFFF",
        activeBackgroundColor: "#FF6C00",
        inactiveTintColor: "gray",
      }}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 50,
          backgroundColor: "#ffffff",
          paddingLeft: 60,
          paddingRight: 60,
          shadowColor: "rgba(0,0,0,0.3)",
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          margin: 5,
          borderRadius: 20,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === "PostScreen") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (routeName === "CreatePostScreen") {
            iconName = focused ? "add" : "add-outline";
          } else if (routeName === "ProfileScreen") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name='PostScreen'
        component={PostScreen}
        options={{
          ...postScreenOptions,
        }}
      />
      <Tabs.Screen
        name='CreatePostScreen'
        component={CreatePostScreen}
        options={{
          ...createPostScreenOptions,
        }}
      />
      <Tabs.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  logOutBtn: {
    marginRight: 10,
  },
  goBackBtn: {
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});