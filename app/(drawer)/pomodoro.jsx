import { useContext, useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { FokusButton } from "../../components/FokusButton";
import { ActionButton } from "../../components/ActionButton";
import { Timer } from "../../components/Timer";
import { IconPlay, IconPause } from "../../components/Icons";
import { Footer } from "../../components/Footer";
import { useTranslation } from "react-i18next";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../components/context/themeContext";

export default function Pomodoro() {
  const { t } = useTranslation();
  const { currentTheme } = useContext(ThemeContext);
  const theme = Colors[currentTheme] ?? Colors.default;

  const pomodoro = [
    {
      id: 'focus',
      initialValue: 25 * 60,
      image: require('../../assets/images/pomodoro.png'),
      display: t('timer.focus')
    },
    {
      id: 'short',
      initialValue: 5 * 60,
      image: require('../../assets/images/short.png'),
      display: t('timer.short')
    },
    {
      id: 'long',
      initialValue: 15 * 60,
      image: require('../../assets/images/long.png'),
      display: t('timer.long')
    }
  ];

  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
  const [timerRunning, setTimerRunning] = useState(false);

  const timerRef = useRef(null);

  const clear = () => {
    if(timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  }

  const toogleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();
  }

  const toogleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        }
        return oldState - 1;
      });
      console.log('Timer rolando...');
    }, 1000);

    timerRef.current = id;
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}
    >
      <Image source={timerType.image} /> 
      <View style={[
        styles.actions,
         { 
          backgroundColor: theme.action.background,
          borderColor: theme.action.border
         }
      ]}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton 
              key={p.id} 
              active={timerType.id === p.id} 
              onPress={() => toogleTimerType(p)}
              display={p.display} 
            />
          ))}
        </View>
        <Timer totalSeconds={seconds} />
        <FokusButton 
          title={timerRunning ? t('timer.pause') : t('timer.start')}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toogleTimer} 
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    gap: 32
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

});
