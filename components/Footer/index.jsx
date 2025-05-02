import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{t('footer.text-1')}</Text>
      <Text style={styles.footerText}>
        {t('footer.text-2')}
        <Text style={styles.footerTextDeveloper}>{t('footer.developer')}</Text>
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
    color: "#98A0A8",
    fontSize: 14,
  },
  footerTextDeveloper: {
    color: "#FFF",
  },
});
