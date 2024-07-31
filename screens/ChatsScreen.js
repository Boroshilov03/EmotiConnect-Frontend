import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ChatList from "../components/ChatList";
import SearchButton from "../components/SearchButton";

const ChatsScreen = () => {
  const navigation = useNavigation();

  const handleChatPress = (item) => {
    // Navigate to ChatDetail screen and pass chat details
    navigation.navigate("ChatDetail", { chat: item });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.screen}>
          <Text style={styles.title}>Chats</Text>
          <SearchButton />
          <ChatList onChatPress={handleChatPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  screen: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default ChatsScreen;
