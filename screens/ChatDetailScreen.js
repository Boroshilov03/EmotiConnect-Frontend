import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

// Placeholder image for avatar
const placeholderAvatar = "https://placeimg.com/140/140/any";

const ChatDetailScreen = () => {
  const route = useRoute();
  const { chat } = route.params;

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate fetching messages from an API
    const fetchMessages = async () => {
      try {
        // Replace with your API call
        const fetchedMessages = [
          {
            _id: 1,
            text: "Hello developer",
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "React Native",
              avatar: chat.profile,
            },
          },
        ];
        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "pink", // Pink background for sent messages
            borderRadius: 10,
          },
          left: {
            backgroundColor: "#f0f0f0", // Light grey background for received messages
            borderRadius: 10,
          },
        }}
        textStyle={{
          right: {
            color: "white", // Black text for sent messages
          },
          left: {
            color: "black", // Black text for received messages
          },
        }}
      />
    );
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: chat.profile || placeholderAvatar }}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>{chat.name}</Text>
          <Text
            style={[
              styles.status,
              chat.status === "online" ? styles.online : styles.offline,
            ]}
          >
            {chat.status}
          </Text>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          name: "You",
        }}
        renderBubble={renderBubble}
        renderAvatarOnUserMessage
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#f5f5f5",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

export default ChatDetailScreen;
