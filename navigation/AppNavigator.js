// navigation/AppNavigator.js
import React, { useState } from 'react'; // Ensure useState is imported
import { createStackNavigator } from '@react-navigation/stack';
import ChatsScreen from '../screens/ChatsScreen';
import ChatDetailScreen from '../screens/ChatDetailScreen';
import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import GiftsScreen from '../screens/GiftsScreen';
import CallsScreen from '../screens/CallsScreen';

const Stack = createStackNavigator();

export function AppNavigator() {
  const [initialized] = useState(false);
  const [authenticated] = useState(false);

  return (
    <Stack.Navigator>
      {!initialized ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : !authenticated ? (
        <Stack.Screen name="SignIn" component={SignInScreen} />
      ) : (
        <>
          <Stack.Screen name="Home" component={ChatsScreen} />
          <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
          <Stack.Screen name="Gifts" component={GiftsScreen} />
          <Stack.Screen name="Calls" component={CallsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
