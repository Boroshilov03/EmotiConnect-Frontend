import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";

const SignUpScreen = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  },[])
  return (
    <SafeAreaView>
      <Text>SignUpScreen</Text>
    </SafeAreaView>
  );
};

export default SignUpScreen;
