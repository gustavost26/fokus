import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

export const Footer = () => {
  const { t } = useTranslation();
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;
  
  return (
    <View style={styles.footer}>
      <Text style={[styles.footerText, { color: theme.footerText }]}>{t('footer.text-1')}</Text>
      <Text style={[styles.footerText, { color: theme.footerText }]}>
        {t('footer.text-2')}
        <Text style={{ color: theme.footerTextDeveloper }}>{t('footer.developer')}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
  }
});
