import { View, Text } from "react-native";
import React from "react";

const Title = ({ text, color }) => {
  return (
    <Text
      style={{
        color: color,
        marginTop: 12,
        textAlign: "center",
        fontSize: 52,
        fontFamily: "OleoScriptSwashCaps-Regular",
        marginBottom: 12,
      }}
    >
      {text}
    </Text>
  );
};

export default Title;
