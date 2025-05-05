import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconCheck, IconPencil, IconTrash } from "../Icons";
import { Colors } from "../../constants/Colors";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const TaskItem = ({
  completed,
  text,
  onToggleComplete,
  onPressEdit,
  onPressDelete,
}) => {
  const cardStyles = [styles.card];
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;

  if(completed){
    cardStyles.push({backgroundColor: theme.cardCompleted});
  } else {
    cardStyles.push({ backgroundColor: theme.backgroundSecondary });
  }

  return (
    <View style={[cardStyles]}>
      <Pressable onPress={onToggleComplete}>
        <IconCheck checked={completed} />
      </Pressable>
      <Text style={[styles.text, { color: theme.text }]}>{text}</Text>
      <Pressable onPress={onPressEdit}>
        <IconPencil color={theme.text} />
      </Pressable>
      <Pressable onPress={onPressDelete}>
        <IconTrash color={theme.text} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
    gap: 8
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default TaskItem;
