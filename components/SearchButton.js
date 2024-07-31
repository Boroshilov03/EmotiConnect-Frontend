import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import EvilIcons from '@expo/vector-icons/EvilIcons';

const SearchButton = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <EvilIcons name="search" size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={(newText) => setText(newText)}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 1,
  },
  searchBar: {
    flex: 1,
    height: 30,
    fontSize: 16,
  },
});

export default SearchButton;
