import { StyleSheet, Text, View } from "react-native";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Projeto sem fins lucrativos.</Text>
      <Text style={styles.footerText}>
        Desenvolvido por{" "}
        <Text style={styles.footerTextDeveloper}>Gustavo Teles</Text>
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
