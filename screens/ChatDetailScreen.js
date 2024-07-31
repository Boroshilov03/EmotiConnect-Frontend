import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const ChatDetailScreen = () => {
  const route = useRoute();
  const { chat } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{chat.name}</Text>
      <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
      {/* Add more details and chat UI here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 18,
    color: "#666",
  },
});

export default ChatDetailScreen;
