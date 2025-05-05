import { router, useLocalSearchParams } from "expo-router";
import { 
  Keyboard, 
  KeyboardAvoidingView, 
  Platform, 
  Pressable, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableWithoutFeedback,
  View } from "react-native";
import { IconSave } from "../../../components/Icons";
import useTaskContext from "../../../components/context/useTaskContext";
import { Footer } from "../../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Colors } from "../../../constants/Colors";
import { ThemeContext } from "../../../components/context/themeContext";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();
  const task = tasks.find(t => t.id == id);
  const [description, setDescription] = useState('');
  const { t } = useTranslation();
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;

  useEffect(() => {
    if (task) {
      setDescription(task.description)
    }
  }, [task])

  const handleSave = () => {
    if (!description) return
    updateTask(task.id, description)
    router.navigate('/tasks')
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.inner, { backgroundColor: theme.backgroundSecondary }]}>
          <Text style={[styles.text, { color: theme.text }]}>{t('tasks.task-edit.title')}</Text>
          <TextInput
            style={[styles.input, { backgroundColor: theme.backgroundInput, color: theme.text }]}
            numberOfLines={10}
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.actions}>
            <Pressable style={styles.button} onPress={handleSave}>
              <IconSave color={theme.text}/>
              <Text style={{ color: theme.text }}>{t('tasks.task-edit.button-save')}</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Footer />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 26
  },
  inner: {
    width: "90%",
    borderRadius: 8,
    padding: 16,
    gap: 32
  },
  label: {
    fontSize: 18,
    fontWeight: 600
  },
  input: {
    padding: 16,
    borderRadius: 8,
    height: 140
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  }
});
