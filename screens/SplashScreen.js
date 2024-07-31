import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <StatusBar barStyle={"light-content"} />
      <View>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 48,
            fontFamily: "OleoScriptSwashCaps-Regular",
          }}
        >
          EmotiConnect
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
