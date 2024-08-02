import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";


export default function SignInScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}
      >
        <Title text="EmotiConnect" color="pink" />
        <Input title="Username" />
        <Input title="Password" />
        <Button title="Sign In" />
        <Text style={{ textAlign: "center", marginTop: 40 }}>
          Don't have an account?{" "}
          <Text
            style={{ color: "pink" }}
            onPress={() => 
              navigation.navigate("SignUp")
            }
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
