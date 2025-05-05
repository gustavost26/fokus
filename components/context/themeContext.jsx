import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export const ThemeContext = createContext({
  isSystemTheme: false,
  currentTheme: 'default',
  toggleTheme: () => {},
  useSystemTheme: () => {},
});

const THEME_STORAGE_KEY = 'fokus-theme';

const ThemeProvider = ({children}) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState('default');
  const [systemTheme, setSystemTheme] = useState(false);

  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedThemeObject = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        const savedThemeObjectData = JSON.parse(savedThemeObject);
        if(savedThemeObjectData) {
          setTheme(savedThemeObjectData.mode);
          setSystemTheme(savedThemeObjectData.system);
        }
      } catch(e) {
        console.log('Erro ao carregar o tema: ', e);
      }
    }

    getTheme();
  }, [])

  useEffect(() => {
    if(colorScheme && systemTheme) {
      const themeObject = {
        mode: colorScheme,
        system: true
      }

      AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(themeObject));
      setTheme(colorScheme);
      setSystemTheme(true);
    }
  }), [colorScheme];

  const toggleTheme = (newTheme) => {
    const themeObject = {
      mode: newTheme,
      system: false
    }

    AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(themeObject));
    setTheme(newTheme);
    setSystemTheme(false);

  }

  const useSystemTheme = () => {
    console.log('useSystemTheme', colorScheme);
    if(colorScheme) {
      const themeObject = {
        mode: colorScheme,
        system: true
      }

      AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(themeObject));
      setTheme(colorScheme);
      setSystemTheme(true);
    }
  }

  return (
    <ThemeContext.Provider value={{ 
      currentTheme: theme,
      toggleTheme,
      useSystemTheme,
      isSystemTheme: systemTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;