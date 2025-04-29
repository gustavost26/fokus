import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({onPress, title, icon, outline}) => {
  return (
    <Pressable 
      style={[styles.button, outline && styles.outlineButton]}
      onPress={onPress}
    >
      {icon}
      <Text 
        style={[styles.buttonText, outline && styles.outlineText]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    justifyContent: "center"
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderColor: "#B872FF",
    borderWidth: 2
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18
  },
  outlineText: {
    color: "#B872FF"
  }
});