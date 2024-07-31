import { FlatList, RefreshControl, StyleSheet } from "react-native";
import React from "react";
import { DUMMY_DATA } from "../data/dummy";
import ChatItem from "./ChatItem";

const ChatList = ({ onChatPress }) => {
  const renderItem = ({ item }) => (
    <ChatItem item={item} onPress={onChatPress} />
  );

  return (
    <FlatList
      data={DUMMY_DATA}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => console.log("refreshing...")}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ChatList;
