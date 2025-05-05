import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { useTranslation } from "react-i18next";
import { Colors } from "../../../constants/Colors";
import { useContext, useEffect } from "react";
import ThemeButton from "../../../components/ThemeButton";
import { ThemeContext } from "../../../components/context/themeContext";

export default function Theme() {
  const { t } = useTranslation();
  const { currentTheme, toggleTheme, useSystemTheme, isSystemTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;

  const themesArray = [
    {
      title: t("settings.theme.light"),
      icon: "lightbulb-on",
      onPress: () => toggleTheme("light"),
      isActive: !isSystemTheme && "light" === currentTheme,
    },
    {
      title: t("settings.theme.dark"),
      icon: "weather-night",
      onPress: () => toggleTheme("dark"),
      isActive: !isSystemTheme && "dark" === currentTheme,
    },
    {
      title: t("settings.theme.system"),
      icon: "theme-light-dark",
      onPress: () => useSystemTheme(),
      isActive: isSystemTheme,
    },
    {
      title: t("settings.theme.default"),
      icon: "weather-partly-cloudy",
      onPress: () => toggleTheme("default"),
      isActive: !isSystemTheme && "default" === currentTheme,
    },
  ];

  useEffect(() => {
    console.log("themeCurrent: ", currentTheme);
    console.log("Styles: ", theme);
  }, [currentTheme]);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}
    >
      <Text style={[styles.title, { color: theme.text }]}>
        {t("settings.theme.theme-switch")}
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.cardTheme }]}
        onPress={() => {}}
      >
        <Text style={[styles.text, { color: theme.text }]}>
          {t("settings.theme.dark-mode")}
        </Text>
        <Switch
          value={currentTheme === "dark"}
          onValueChange={() =>
            toggleTheme(currentTheme === "light" ? "dark" : "light")
          }
        />
      </TouchableOpacity>
      <Text style={[styles.title, { color: theme.text }]}>
        {t("settings.theme.theme-settings")}
      </Text>
      {themesArray.map((v, index) => {
        return (
          <ThemeButton
            key={index}
            title={v.title}
            icon={v.icon}
            onPress={v.onPress}
            isActive={v.isActive}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "5",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
