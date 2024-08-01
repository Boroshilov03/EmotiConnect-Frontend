import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

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
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Gifts: 'gift',
            Chats: 'fa-brands fa-rocketchat',
            Calls: 'phone',
            Calendar: 'calendar-days'
          };
          const icon = icons[route.name];
          return <FontAwesomeIcon icon={icon} size={28} color={color} />;
        },
        tabBarActiveTintColor: 'rgba(214, 151, 214, 0.7)'
        // tabBarActiveTintColor: '#d697d6',
        // tabBarInactiveTintColor: '#ffffff',
        // tabBarStyle: {
        //   backgroundColor: 'rgba(214, 151, 214, 0.7)', // Light pink color with transparency
        //   borderTopWidth: 0,
        //   elevation: 0,
        //   position: 'absolute',
        //   bottom: 20,
        //   left: 20,
        //   right: 20,
        //   borderRadius: 20,
        //   height: 70,
        //   paddingBottom: 10,
        // },
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
