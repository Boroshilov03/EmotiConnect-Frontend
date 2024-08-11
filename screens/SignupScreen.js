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
import React, { useContext, useLayoutEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Title from "../components/Title";
import * as ImagePicker from "expo-image-picker";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const [usernameError, setUsernameError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password1Error, setPassword1Error] = useState("");
  const [password2Error, setPassword2Error] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  async function pickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission needed",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }

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

  async function onSignUp() {
    // Reset errors
    setUsernameError("");
    setFirstnameError("");
    setLastnameError("");
    setEmailError("");
    setPassword1Error("");
    setPassword2Error("");
    setPhoneNumberError("");

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

    const failEmail = !email;
    if (failEmail) {
      setEmailError("Email not provided");
    }

    const failPassword1 = !password1 || password1.length < 8;
    if (failPassword1) {
      setPassword1Error("Password must be at least 8 characters long");
    }

    const failPassword2 = password1 !== password2;
    if (failPassword2) {
      setPassword2Error("Passwords do not match");
    }

    const failPhoneNumber =
      !phoneNumber || phoneNumber.length < 10 || !/^\d+$/.test(phoneNumber);
    if (failPhoneNumber) {
      setPhoneNumberError(
        "Phone Number must be at least 10 digits long and contain only numbers"
      );
    }

    if (
      failUsername ||
      failFirstName ||
      failLastName ||
      failEmail ||
      failPassword1 ||
      failPassword2 ||
      failPhoneNumber
    ) {
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("first_name", firstname);
    formData.append("last_name", lastname);
    formData.append("email", email);
    formData.append("password", password1);
    formData.append("phone_number", phoneNumber);
    if (profilePhoto) {
      formData.append("thumbnail", {
        uri: profilePhoto,
        name: `${username}_thumbnail.jpg`,
        type: "image/jpeg",
      });
    }

    try {
      const response = await fetch("http://192.168.0.102:8000/chat/signup/", {
        method: "POST",
        body: formData,
        mode: "cors",
      });

      const responseText = await response.text();
      console.log("Response Status:", response.status);
      console.log("Response Text:", responseText);

      try {
        const data = JSON.parse(responseText);
        if (!response.ok) {
          console.error("Response error:", data);
          Alert.alert(
            "Error",
            `Failed to register. ${data.detail || "Please try again."}`
          );
          return;
        }
        Alert.alert("Success", "User registered successfully!");
        navigation.navigate("SignIn");
      } catch (error) {
        console.error("JSON parse error:", error);
        Alert.alert("Error", "An error occurred. Please try again.");
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.error("Request was aborted:", error);
        Alert.alert("Error", "Request was aborted. Please try again.");
      } else {
        console.error("Error:", error.message);
        Alert.alert("Error", "An error occurred. Please try again.");
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <Title text="EmotiConnect" color="pink" />
            <TouchableWithoutFeedback onPress={pickImage}>
              <View style={styles.imageContainer}>
                {profilePhoto ? (
                  <Image source={{ uri: profilePhoto }} style={styles.image} />
                ) : (
                  <View style={styles.imagePlaceholder}>
                    <Text style={styles.imagePlaceholderText}>
                      Upload Photo
                    </Text>
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
              title="Email"
              value={email}
              error={emailError}
              setValue={setEmail}
              setError={setEmailError}
            />
            <Input
              title="Phone Number"
              value={phoneNumber}
              error={phoneNumberError}
              setValue={setPhoneNumber}
              setError={setPhoneNumberError}
              keyboardType="phone-pad"
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
            <Text style={styles.signInText}>
              Already have an account?{" "}
              <Text
                style={styles.signInLink}
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
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e1e1e1",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholderText: {
    color: "#a1a1a1",
    fontSize: 14,
  },
  signInText: {
    textAlign: "center",
    marginTop: 20,
  },
  signInLink: {
    color: "#ff1493",
    fontWeight: "bold",
  },
});
