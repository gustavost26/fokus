import { FlatList, StyleSheet, Text, View } from "react-native";
import TaskItem from "../../../components/TaskItem";
import { FokusButton } from "../../../components/FokusButton";
import { IconPlus } from "../../../components/Icons";
import { router } from "expo-router";
import useTaskContext from "../../../components/context/useTaskContext";
import { useTranslation } from "react-i18next";
import { Colors } from "../../../constants/Colors";
import { useContext } from "react";
import { ThemeContext } from "../../../components/context/themeContext";

export default function Tasks() {
  const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext();
  const { t } = useTranslation();
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem 
                completed={item.completed} 
                text={item.description}
                onPressDelete={() => deleteTask(item.id)}
                onToggleComplete={() => toggleTaskCompleted(item.id)}
                onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListHeaderComponent={
              <Text style={[styles.text, { color: theme.text }]}>{t('tasks.task-list.title')}</Text>
            }
            ListFooterComponent={
              <View style={{ marginTop: 16 }}>
                <FokusButton 
                  title={t('tasks.task-list.button-add')}
                  icon={<IconPlus outline />}
                  outline
                  onPress={() => router.navigate("/add-task")}
                />
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15
  },
  wrapper: {
    gap: 40,
    width: "90%",
  },
  text: {
    textAlign: "center",
    fontSize: 26,
    marginBottom: 16
  },
  inner: {
    gap: 8
  }
}); 