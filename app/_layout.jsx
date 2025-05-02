import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TaskProvider } from "../components/context/TaskProvider";
import '@/i18n';
import { useTranslation } from "react-i18next";

export default function Layout() {

  const { t } = useTranslation();

  return (
    <TaskProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerStyle: {
              backgroundColor: "#021123",
            },
            headerTintColor: "#FFF",
            drawerStyle: {
              backgroundColor: "#021123",
            },
            drawerLabelStyle: {
              color: "#FFF",
            },
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              headerShown: false,
              drawerItemStyle: {
                display: "none",
              },
            }}
          />
          <Drawer.Screen
            name="add-task/index"
            options={{
              drawerItemStyle: {
                display: "none",
              },
              title: "",
              headerLeft: () => {
                return (
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color="#FFF"
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/tasks")}
                  />
                );
              },
            }}
          />
          <Drawer.Screen
            name="edit-task/[id]"
            options={{
              drawerItemStyle: {
                display: "none",
              },
              title: "",
              headerLeft: () => {
                return (
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color="#FFF"
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/tasks")}
                  />
                );
              },
            }}
          />
          <Drawer.Screen
            name="pomodoro"
            options={{
              drawerLabel: t('menu.timer'),
              title: "",
            }}
          />
          <Drawer.Screen
            name="tasks/index"
            options={{
              drawerLabel: t('menu.tasks'),
              title: "",
            }}
          />
          <Drawer.Screen 
            name="settings/index"
            options={{
              drawerLabel: t('menu.settings'),
              title: "",
            }}
          />
          <Drawer.Screen 
            name="language/index"
            options={{
              drawerItemsStyle: {
                display: "none",
              },
              title: "",
              headerLeft: () => {
                return (
                  <Ionicons 
                    name="arrow-back"
                    size={24}
                    color={"#FFF"}
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/settings")}
                  />
                )
              }
            }}
          />
          <Drawer.Screen 
            name="theme/index"
            options={{
              drawerItemsStyle: {
                display: "none",
              },
              title: "",
              headerLeft: () => {
                return (
                  <Ionicons 
                    name="arrow-back"
                    size={24}
                    color={"#FFF"}
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/settings")}
                  />
                )
              }
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </TaskProvider>
  );
}
