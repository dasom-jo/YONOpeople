import * as React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface HalfInputProps {
  children: React.ReactNode;
  placeholder?: string; // 입력 필드에 대한 placeholder
}

const HalfInput = ({ children, placeholder }: HalfInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{children}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  label: {
    backgroundColor: "#71C4E0",
    fontWeight: "bold",
    paddingVertical: 15,
    paddingHorizontal: 16,
    width: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    textAlign: "center",
    fontFamily: "Gyeonggi_Batang_Regular",
    height:50
  },
  input: {
    backgroundColor: "#E0E0E0", // bg-basicgray
    paddingVertical: 12, // py-4
    paddingHorizontal: 16, // px-8
    width: 192, // w-48
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    color: "#000",
    height:50
  },
});

export default HalfInput;


