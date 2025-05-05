import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconBrazil, IconSpain, IconUSA } from "../../../components/Icons";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../../../constants/Colors";
import { ThemeContext } from "../../../components/context/themeContext";

const flags = [
  { component: IconBrazil, lang: "pt-BR", name: "Brasil" },
  { component: IconSpain, lang: "es-ES", name: "Espanha" },
  { component: IconUSA, lang: "en-US", name: "USA" },
];

export default function Language() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem("language");
      if(savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };

    loadLanguage();
  }, [i18n]);

  const changeLanguage = async (lang) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}>
      <Text style={[styles.text, { color: theme.text }]}>{t('language')}</Text>
      <View style={styles.flagContainer} >
        {flags.map(({component: Flag, lang, name}) => (
          <TouchableOpacity 
            key={name}
            onPress={() => changeLanguage(lang)}
            style={[
              styles.flag,
              currentLanguage === lang && styles.activeFlag,
              currentLanguage !== lang && styles.inactiveFlag
            ]}
          >
            <Flag width={50} height={50}/>
        </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    paddingTop: 20
  },
  text: {
    textAlign: "center",
    fontSize: 26
  },
  flagContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  flag: {
    paddingHorizontal: 10
  },
  activeFlag: {
    transform: [{ scale: 1.2 }]
  },
  inactiveFlag: {
    opacity: 0.5
  }
});