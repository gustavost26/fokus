import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/Colors";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const Timer = ({ totalSeconds }) => {
  const date = new Date(totalSeconds * 1000);
  const options = { minute: "2-digit", second: "2-digit" };
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;

  return (
    <Text style={[styles.timer, { color: theme.text }]}>
      {date.toLocaleTimeString("pt-BR", options)}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
  },
});
