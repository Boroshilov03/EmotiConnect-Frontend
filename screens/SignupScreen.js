import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Image,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import * as ImagePicker from "expo-image-picker";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

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

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePhoto(result.assets[0].uri);
    }
  }

  function onSignUp() {
    console.log("onSign Up");

    const failUsername = !username || username.length < 5;
    if (failUsername) {
      setUsernameError("Username must be at least 5 characters long");
    }

    const failFirstName = !firstname;
    if (failFirstName) {
      setFirstnameError("First Name not provided");
    }

    const failLastName = !lastname;
    if (failLastName) {
      setLastnameError("Last Name not provided");
    }

    const failPassword1 = !password1 || password1.length < 8;
    if (failPassword1) {
      setPassword1Error("Password must be at least 8 characters long");
    }

    const failPassword2 = password1 !== password2;
    if (failPassword2) {
      setPassword2Error("Passwords do not match");
    }

    if (
      failUsername ||
      failFirstName ||
      failLastName ||
      failPassword1 ||
      failPassword2
    ) {
      return;
    }

    // Make sign-up request
    console.log("Signing up with", {
      username,
      firstname,
      lastname,
      password1,
      profilePhoto,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Title text="EmotiConnect" color="pink" />
            <TouchableWithoutFeedback onPress={pickImage}>
              <View style={{ alignItems: "center", marginBottom: 20 }}>
                {profilePhoto ? (
                  <Image
                    source={{ uri: profilePhoto }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                  />
                ) : (
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                      backgroundColor: "#e1e1e1",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "gray" }}>Upload Photo</Text>
                  </View>
                )}
              </View>
            </TouchableWithoutFeedback>
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
            <Text style={{ textAlign: "center", marginTop: 40, marginBottom: 40}}>
              Already have an account?{" "}
              <Text
                style={{ color: "pink" }}
                onPress={() => navigation.navigate("SignIn")}
              >
                Sign In
              </Text>
            </Text>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});
