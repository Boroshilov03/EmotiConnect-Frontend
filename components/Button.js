import {Text,TouchableOpacity } from 'react-native'

function Button({ title }) {
    return (
      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: "pink",
          borderRadius: 26,
          height: 52,
          fontSize: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  

  export default Button