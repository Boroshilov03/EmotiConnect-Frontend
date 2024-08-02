import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";

export default function SignupScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 16 }}
      >
        <Title text="EmotiConnect" color="pink" />
        <Input title="Username" />
        <Input title="First Name" />
        <Input title="Last Name" />
        <Input title="Password" />
        <Input title="Confirm Password" />
        <Button title="Sign Up" />
        <Text style={{ textAlign: "center", marginTop: 40 }}>
          Already have an account?{" "}
          <Text
            style={{ color: "pink" }}
            onPress={() => navigation.navigate("SignIn")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
