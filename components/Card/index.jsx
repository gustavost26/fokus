import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const Card = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Ionicons name="chevron-forward" size={24} color="#021123" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#98A0A8",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 8,
    margin: 8,
    width: "91%"
  },
  text: {
    flex: 1,
    color: "#021123",
    fontSize: 18,
    fontWeight: "bold"
  }
});