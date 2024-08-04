import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [password1Error, setPassword1Error] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function onSignUp() {
    console.log("onSign Up");

    //Check username
    const failUsername = !username || username.length < 5;
    if (failUsername) {
      setUsernameError("Username must be atleast 5 characters long");
    }
    //Check firstName
    const failFirstName = !firstname;
    if (failFirstName) {
      setFirstnameError("First Name not provided");
    }
    //Check lastName
    const failLastName = !lastname;
    if (failLastName) {
      setLastnameError("Last Name not provided");
    }
    //Check password1
    const failPassword1 = !password1 || password1 < 8;
    if (failPassword1) {
      setPassword1Error("Password must be atleast 8 characters long");
    }

    //Check password2
    const failPassword2 = !password2;
    if (failPassword2) {
      setPassword2Error("Passwords do not match");
    }
    //Break out of this function if there were any issues
    if (
      failUsername ||
      failFirstName ||
      failLastName ||
      failPassword1 ||
      failPassword2
    ) {
      return;
    }
    //Make signIn request
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{ flex: 1, justifyContent: "center", paddingHorizontal: 16 }}
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
              title="First Name"
              value={firstname}
              error={firstnameError}
              setValue={setFirstname}
              setError={setFirstnameError}
            />
            <Input
              title="Last Name"
              value={lastname}
              error={lastnameError}
              setValue={setLastname}
              setError={setLastnameError}
            />
            <Input
              title="Password"
              value={password1}
              error={password1Error}
              setValue={setPassword1}
              setError={setPassword1Error}
              secureTextEntry={true}
            />
            <Input
              title="Confirm Password"
              value={password2}
              error={password2Error}
              setValue={setPassword2}
              setError={setPassword2Error}
              secureTextEntry={true}
            />
            <Button title="Sign Up" onPress={onSignUp} />
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
