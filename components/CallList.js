import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { CALLS_DATA } from "../data/calls_dummy"; // Note the use of named import
import CallItem from "./CallItem";

export default function CallList() {
  const renderItem = ({ item }) => <CallItem item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={CALLS_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
