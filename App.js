import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import {useRef, useState} from "react";
import Dice from "./components/Dice";

export default function App() {
  const [dice, setDice] = useState();
  const rollFunction = (diceSelect) => {
    setTimeout(function timeout() {
      clearInterval(interval)
    }, 777)
    const interval = setInterval(function interval() {
      const randomDice = Math.ceil(Math.random() * diceSelect);
      setDice(randomDice)
    }, 30);
  };
  const onClick = () => {
    fadeIn();
    return rollFunction(6)
  }
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {

    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 70}}>{dice}</Text>
      {Dice(dice, fadeAnim)}
      <Button style title="Roll the dice" onPress={onClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 100
  },
});
