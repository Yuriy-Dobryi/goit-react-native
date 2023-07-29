import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import PostsScreen from "./PostsScreen";
import CreatePostScreen from "./CreatePostScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();
 
export default function Home() {
  const navigation = useNavigation();

  const tabBarIcon = (name, color) => (
    <Feather name={name} size={24} color={color} />
  );

  const goBackBtn = (
    <TouchableOpacity
      style={{ marginLeft: 16 }}
      onPress={() => navigation.goBack()}
    >
      {tabBarIcon("arrow-left", "#212121")}
    </TouchableOpacity>
  );

  const logOutButton = (
    <TouchableOpacity style={{ marginRight: 16 }}>
      {tabBarIcon("log-out", "#BDBDBD")}
    </TouchableOpacity>
  );

  return (
    <Tabs.Navigator
      initialRouteName='PostsScreen'
      screenOptions={{
        tabBarStyle: {
          height: 83,
          paddingHorizontal: 70,
          paddingTop: 9,
          paddingBottom: 34,
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarItemStyle: {
          borderRadius: 20,
        },
        headerTitleStyle: {
          fontSize: 17,
          fontWeight: 500,
        },
      }}
    >
      <Tabs.Screen
        name='PostsScreen'
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => logOutButton,
          tabBarIcon: ({ color }) => tabBarIcon("grid", color),
        }}
      />
      <Tabs.Screen
        name='CreatePostScreen'
        component={CreatePostScreen}
        options={{
          title: "Створити публікацію",
          tabBarStyle: {
            height: 0,
          },
          headerLeft: () => goBackBtn,
          tabBarIcon: ({ color }) => tabBarIcon("plus", color),
        }}
      />
      <Tabs.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => tabBarIcon("user", color),
        }}
      />
    </Tabs.Navigator>
  );
}