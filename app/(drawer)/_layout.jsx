import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import "@/i18n";
import { useTranslation } from "react-i18next";
import { Colors } from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "../../components/context/themeContext";
import { useContext } from "react";

export default function Layout() {
  const { t } = useTranslation();
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;
  
  return (
    <>
      <StatusBar style="auto" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.backgroundPrimary,
            },
            headerTintColor: theme.text,
            drawerStyle: {
              backgroundColor: theme.backgroundPrimary,
            },
            drawerLabelStyle: {
              color: theme.text,
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
                    color={theme.text}
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
                    color={theme.text}
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
              drawerLabel: t("menu.timer"),
              title: "",
            }}
          />
          <Drawer.Screen
            name="tasks/index"
            options={{
              drawerLabel: t("menu.tasks"),
              title: "",
            }}
          />
          <Drawer.Screen
            name="settings/index"
            options={{
              drawerLabel: t("menu.settings"),
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
                    color={theme.text}
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/settings")}
                  />
                );
              },
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
                    color={theme.text}
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/settings")}
                  />
                );
              },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </>
  );
}
