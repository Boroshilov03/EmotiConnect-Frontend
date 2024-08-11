import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useCallback, useEffect } from "react";

const ChatItem = ({ item, onPress }) => {

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(item)}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      <Text style={styles.timestamp}>
        {new Date(item.timestamp).toLocaleString()}
      </Text>
      <Text
        style={[
          styles.status,
          item.status === "online" ? styles.online : styles.offline,
        ]}
      >
        {item.status}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 14,
    color: "#666",
  },
  timestamp: {
    fontSize: 12,
    color: "#999",
  },
  status: {
    fontSize: 12,
  },
  online: {
    color: "green",
  },
  offline: {
    color: "red",
  },
});

export default ChatItem;
