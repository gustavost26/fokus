import { Pressable, StyleSheet, Text, View } from "react-native";
import { Card } from "../../components/Card";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

export default function Settings () {
  const { t } = useTranslation();

  const settings = [
    { title: t('settings.language'), onPress: () => router.navigate("/language") },
    { title: t('settings.theme'), onPress: () => router.navigate("/theme") },
  ];

  return (
    <View style={styles.containe}>
      <Text style={styles.text}>{t('settings.title')}</Text>
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
    backgroundColor: "#021123",
  },
  text: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 26,
    marginBottom: 16
  }
});