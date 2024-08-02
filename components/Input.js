import {View, Text, TextInput} from "react-native"

function Input({ title }) {
    return (
      <View style={{ marginVertical: 6 }}>
        <Text
          style={{ color: "#70747a", marginVertical: 6, paddingHorizontal: 16 }}
        >
          {title}
        </Text>
        <TextInput
          style={{
            backgroundColor: "lightgray",
            borderRadius: 26,
            height: 32,
            paddingHorizontal: 16,
            fontSize: 16,
          }}
        />
      </View>
    );
  }

  export default Input