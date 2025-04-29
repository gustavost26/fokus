import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { Footer } from "../components/Footer";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua {'\n'} produtividade, {'\n'}
          <Text style={styles.bold}>
            mergulhe no que {'\n'} importa
          </Text>
        </Text>
        
        <Image style={styles.image} source={require("../assets/images/home.png")} />
        <FokusButton 
          onPress={() => router.navigate("/pomodoro")}
          title="Quero iniciar!" 
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