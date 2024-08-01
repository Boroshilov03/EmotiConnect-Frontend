import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./navigation/AppNavigator";
import * as SplashScreen from 'expo-splash-screen';
import useFonts from "./hooks/useFonts";
import './core/fontawesome'
import { DefaultTheme } from "react-native-paper";

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  }
}

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!isReady) {
    return null; // Or a custom splash screen component
  }

  return (
    <NavigationContainer theme={LightTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
