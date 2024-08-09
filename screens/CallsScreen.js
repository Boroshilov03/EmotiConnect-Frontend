import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import CallList from "../components/CallList";
import SearchButton from "../components/SearchButton";

const CallsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>Calls</Text>
          <SearchButton />
          <CallList />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default CallsScreen;
