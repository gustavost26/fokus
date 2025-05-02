import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { Footer } from "../components/Footer";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          {t('home.subtitle-1')}
          <Text style={styles.bold}>
          {t('home.subtitle-2')}
          </Text>
        </Text>
        
        <Image style={styles.image} source={require("../assets/images/home.png")} />
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
    backgroundColor: "#021123",
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
    color: "#FFF",
    textAlign: "center",
    fontSize: 26
  },
  bold: {
    fontWeight: "bold"
  }
});