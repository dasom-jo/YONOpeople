import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const CategoryBtn = () => {
  const categories = ["식비", "간식비", "생필품", "사치품"];
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => console.log(`${category} 클릭됨`)}
        >
          <Text style={styles.text}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 8,
  },
  button: {
    backgroundColor: "#E0E0E0",
    padding: 8,
    width: 64,
    margin: 4,
    borderRadius: 12,
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#000",
    fontFamily: "Gyeonggi_Batang_Regular",
  },
});
