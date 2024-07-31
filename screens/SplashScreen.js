import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Animated,
  StyleSheet,
} from "react-native";
import Title from "../components/Title";

const SplashScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  },[])

  const translateY = new Animated.Value(0);
  const duration = 800;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -15,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Animated.View
        style={[styles.titleContainer, { transform: [{ translateY }] }]}
      >
        <Title text="EmotiConnect" color="pink" />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000", // Color of the shadow
    shadowOffset: { width: 0, height: 10 }, // Offset of the shadow
    shadowOpacity: 0.1, // Opacity of the shadow
    shadowRadius: 3.5, // Radius of the shadow
    elevation: 5, // Android shadow
  },
});

export default SplashScreen;
