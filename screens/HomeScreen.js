import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { BlurView } from "expo-blur";

import GiftsScreen from "../screens/GiftsScreen";
import CallsScreen from "../screens/CallsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import ChatsScreen from "../screens/ChatsScreen";

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Gifts: "gift",
            Chats: "fa-brands fa-rocketchat",
            Calls: "phone",
            Calendar: "calendar-days",
          };
          const icon = icons[route.name];
          return <FontAwesomeIcon icon={icon} size={25} color={color} />;
        },
        tabBarActiveTintColor: "pink",
        tabBarStyle: {
          position: 'absolute',
          height: 50,
          backgroundColor: 'transparent',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: 'hidden',
          borderTopWidth: 0, // Ensure no top border is applied
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
        },
        tabBarBackground: () => (
          <BlurView
            intensity={65}
            tint="light"
            style={{
              ...StyleSheet.absoluteFillObject,
            }}
          />
        ),
      })}
    >
      <Tab.Screen name="Gifts" component={GiftsScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
