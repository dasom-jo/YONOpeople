import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BasicButton } from "../../packages/ui/src/BasicButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <BasicButton style={styles.button} onPress={() => console.log("Button Pressed")}>
        Click Me
      </BasicButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DFF5FC", // 배경색
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    color: "#333", // 텍스트 색상[]
  },
  button: {
    marginTop: 16, // 버튼 여백
  },
});
