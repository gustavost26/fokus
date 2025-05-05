import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const Card = ({ text }) => {
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;
  return (
    <View style={[styles.container, { backgroundColor: theme.cardTheme }]}>
      <Text style={[styles.text, { color: theme.text }]}>{text}</Text>
      <Ionicons name="chevron-forward" size={24} color={theme.text} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
    fontSize: 18,
    fontWeight: "bold"
  }
});