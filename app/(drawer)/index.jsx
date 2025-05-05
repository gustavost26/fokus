import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import { FokusButton } from "../../components/FokusButton";
import { Footer } from "../../components/Footer";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Colors } from "@/constants/Colors";
import { useContext } from "react";
import { ThemeContext } from "../../components/context/themeContext";

export default function Index() {
  const { t } = useTranslation();
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;

  const logo = currentTheme !== "light" ? require("../../assets/images/logo-white.png") : require("../../assets/images/logo-dark.png");

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}>
      <Image source={logo} />
      <View style={styles.inner}>
        <Text style={[styles.title, { color: theme.text }]}>
          {t('home.subtitle-1')}
          <Text style={styles.bold}>
          {t('home.subtitle-2')}
          </Text>
        </Text>
        
        <Image style={styles.image} source={require("../../assets/images/home.png")} />
        <FokusButton 
          onPress={() => router.navigate("/pomodoro")}
          title={t('home.button')} 
        />
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 60
  },
  inner: {
    gap: 16
  },
  image: {
    width: 317,
    height: 266
  },
  title: {
    textAlign: "center",
    fontSize: 26
  },
  bold: {
    fontWeight: "bold"
  }
});