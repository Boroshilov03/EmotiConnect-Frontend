import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import Title from "../components/Title";

function Input({ title }) {
  return (
    <View style={{marginVertical:6 }}>
      <Text  style={{ color: "#70747a", marginVertical:6, paddingHorizontal: 16 }}>{title}</Text>
      <TextInput style={{backgroundColor:'pink', borderRadius: 26, height: 32, paddingHorizontal: 16, fontSize: 16}}/>
    </View>
  );
}

export default function SignInScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20}}>
        <Title text="EmotiConnect" color="pink" />
        <Input title="Username" />
        <Input title="Password" />
      </View>
    </SafeAreaView>
  );
}
