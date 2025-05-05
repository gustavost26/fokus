import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from '../context/themeContext';
import { Colors } from '../../constants/Colors';

const ThemeButton = ({title, icon, onPress, isActive}) => {
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;

  return (
    <TouchableOpacity style={[styles.themeButton, { backgroundColor: theme.cardTheme }]} onPress={onPress}>
      <View style={styles.titleWrapper}>
        <MaterialCommunityIcons 
          name={icon}
          size={20} 
          color={theme.text} />
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      </View>
      <MaterialCommunityIcons 
        name={ isActive ? "check-circle" : "checkbox-blank-circle-outline"}
        size={20}
        color={isActive ? "#00a878" : theme.text}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  themeButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  title: {
    fontSize: 14,
    fontWeight: '5'
  }
});

export default ThemeButton;

