import { Pressable, StyleSheet, Text, View } from "react-native";
import { Card } from "../../../components/Card";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Colors } from "../../../constants/Colors";
import { ThemeContext } from "../../../components/context/themeContext";
import { useContext } from "react";

export default function Settings () {
  const { t } = useTranslation();
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;

  const settings = [
    { title: t('settings.language'), onPress: () => router.navigate("/language") },
    { title: t('settings.theme.title'), onPress: () => router.navigate("/theme") },
  ];

  return (
    <View style={[styles.containe, { backgroundColor: theme.backgroundPrimary }]}>
      <Text style={[styles.text, { color: theme.text }]}>{t('settings.title')}</Text>
      {settings.map((value, index) => {
        return (
          <Pressable key={index} onPress={value.onPress} >
            <Card text={value.title} />
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  containe: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20
  },
  text: {
    textAlign: "center",
    fontSize: 26,
    marginBottom: 16
  }
});