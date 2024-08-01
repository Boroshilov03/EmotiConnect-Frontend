import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ChatList from "../components/ChatList";
import SearchButton from "../components/SearchButton";

function ChatsScreen() {
  const navigation = useNavigation();

  const handleChatPress = (item) => {
    // Navigate to ChatDetail screen and pass chat details
    navigation.navigate("ChatDetail", { chat: item });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>Chats</Text>
          <SearchButton />
          <ChatList onChatPress={handleChatPress} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
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
  navBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default ChatsScreen;
