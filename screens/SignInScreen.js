import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignInScreen({ navigation }) {
  function onSignIn() {
    console.log("On Sign In", username, password);

    //Check username
    const failUsername = !username;
    if (failUsername) {
      setUsernameError("Username not provided");
    }
    //Check password
    const failPassword = !password;
    if (failPassword) {
      setPasswordError("Password not provided");
    }
    //Break out of this function if there were any issues
    if (failUsername || failPassword) {
      return;
    }
    //Make signIn request
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}
          >
            <Title text="EmotiConnect" color="pink" />
            <Input
              title="Username"
              value={username}
              error={usernameError}
              setValue={setUsername}
              setError={setUsernameError}
            />
            <Input
              title="Password"
              value={password}
              error={passwordError}
              setValue={setPassword}
              setError={setPasswordError}
              secureTextEntry={true}
            />
            <Button title="Sign In" onPress={onSignIn} />
            <Text style={{ textAlign: "center", marginTop: 40 }}>
              Don't have an account?{" "}
              <Text
                style={{ color: "pink" }}
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
