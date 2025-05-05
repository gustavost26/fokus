import { Slot } from "expo-router";
import ThemeProvider from "../components/context/themeContext";
import { TaskProvider } from "../components/context/TaskProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Slot />
      </TaskProvider>
    </ThemeProvider>
  );
}
