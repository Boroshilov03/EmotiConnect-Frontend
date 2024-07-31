import { View, Text } from "react-native";
import React from "react";

const Title = ({ text, color }) => {
  return (
    <Text
      style={{
        color: color,
        textAlign: "center",
        fontSize: 52,
        fontFamily: "OleoScriptSwashCaps-Regular",
      }}
    >
      {text}
    </Text>
  );
};

export default Title;
