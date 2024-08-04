import { View, Text, TextInput } from "react-native";

function Input({ title, value, error, setValue, setError, secureTextEntry }) {
  return (
    <View style={{ marginVertical: 6 }}>
      <Text
        style={{ color: error ? '#ff5555' : "#70747a", marginVertical: 6, paddingHorizontal: 16 }}
      >
        {error ? error : title}
      </Text>
      <TextInput
      autoCapitalize="none"
      autoComplete="off"
      secureTextEntry={secureTextEntry}
        style={{
          backgroundColor: "lightgray",
          borderWidth: 1,
          borderColor: error ? "#ff5555" : 'transparent',
          borderRadius: 26,
          height: 32,
          paddingHorizontal: 16,
          fontSize: 16,
          
        }}
        value={value}
        onChangeText={(text) => {
          setValue(text);
          if (error) {
            setError("");
          }
        }}
      />
    </View>
  );
}

export default Input;
