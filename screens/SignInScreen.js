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
import api from "../core/api";

export default function SignInScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onSignIn = () => {
    console.log("On Sign In", username, password);

    // Reset errors
    setUsernameError("");
    setPasswordError("");

    // Check username and password
    const failUsername = !username;
    const failPassword = !password;

    if (failUsername) {
      setUsernameError("Username not provided");
    }
    if (failPassword) {
      setPasswordError("Password not provided");
    }
    // Break out of this function if there were any issues
    if (failUsername || failPassword) {
      return;
    }

    // Make sign-in request
    api({
      method: "POST",
      url: "/chat/signin/",
      data: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        console.log('Sign In:', response.data);
        // Navigate to another screen or perform some action upon successful sign-in
      })
      .catch((error) => {
        if (error.response) {
          // Handle response errors
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          if (error.response.data.detail) {
            // Set errors from response if available
            if (error.response.data.detail.includes('Username')) {
              setUsernameError(error.response.data.detail);
            } else if (error.response.data.detail.includes('Password')) {
              setPasswordError(error.response.data.detail);
            }
          }
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
              setValue={(value) => {
                setUsername(value);
                if (value) setUsernameError(""); // Clear error when user types
              }}
              setError={setUsernameError}
            />
            <Input
              title="Password"
              value={password}
              error={passwordError}
              setValue={(value) => {
                setPassword(value);
                if (value) setPasswordError(""); // Clear error when user types
              }}
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
