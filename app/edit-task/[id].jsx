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
import { IconSave } from "../../components/Icons";
import useTaskContext from "../../components/context/useTaskContext";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();
  const task = tasks.find(t => t.id == id);
  const [description, setDescription] = useState('');
  const { t } = useTranslation();

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
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>{t('tasks.task-edit.title')}</Text>
          <TextInput
            style={styles.input}
            numberOfLines={10}
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.actions}>
            <Pressable style={styles.button} onPress={handleSave}>
              <IconSave />
              <Text>{t('tasks.task-edit.button-save')}</Text>
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
    backgroundColor: "#021123",
    gap: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 26
  },
  inner: {
    backgroundColor: "#98A0A8",
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
    backgroundColor: "#FFF",
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
