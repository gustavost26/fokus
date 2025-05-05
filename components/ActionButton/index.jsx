import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/Colors";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const ActionButton = ({ active, onPress, display }) => {
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;

  return (
    <Pressable
      style={active ? [styles.contextButtonActive, { backgroundColor: theme.action.active }] : null}
      onPress={onPress}
    >
      <Text style={[styles.contextButtonText, { color: theme.text }]}>{display}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contextButtonActive: {
    borderRadius: 8
  },
  contextButtonText: {
    fontSize: 12.5,
    padding: 8
  }
});
