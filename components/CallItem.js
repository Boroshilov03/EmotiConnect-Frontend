import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function CallItem({ item }) {
  // Determine the name color based on the status
  const nameColor = item.status === "Missed" ? "#fb5757" : "#000"; // Default color is black

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.profile }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.name, { color: nameColor }]} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.status}>{item.status}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  imageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    justifyContent: "center",
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    fontSize: 14,
    color: "#555",
  },
  timestamp: {
    fontSize: 12,
    color: "#888",
  },
});
