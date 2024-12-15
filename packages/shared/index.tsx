import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const SharedButton = ({ title }: { title: string }) => (
  <View style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
  },
});
