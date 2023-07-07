import {Animated, View, StyleSheet} from "react-native";
import DotRow from "./DotRow";
import {useRef} from "react";

const Dice = (dice, fadeAnim) => {
  const diceFace = () => {
    switch (dice) {
      case 1:
        return (
          <>
            {DotRow("white", "white", "white")}
            {DotRow("white", "black", "white")}
            {DotRow("white", "white", "white")}
          </>
        )
      case 2:
        return (
          <>
            {DotRow("black", "white", "white")}
            {DotRow("white", "white", "white")}
            {DotRow("white", "white", "black")}
          </>
        )
      case 3:
        return (
          <>
            {DotRow("white", "white", "black")}
            {DotRow("white", "black", "white")}
            {DotRow("black", "white", "white")}
          </>
        )
      case 4:
        return (
          <>
            {DotRow("black", "white", "black")}
            {DotRow("white", "white", "white")}
            {DotRow("black", "white", "black")}
          </>
        )
      case 5:
        return (
          <>
            {DotRow("black", "white", "black")}
            {DotRow("white", "black", "white")}
            {DotRow("black", "white", "black")}
          </>
        )
      case 6:
        return (
          <>
            {DotRow("black", "white", "black")}
            {DotRow("black", "white", "black")}
            {DotRow("black", "white", "black")}
          </>
        )
      default:
        return (
          <>
            {DotRow("white", "black", "white")}
            {DotRow("black", "white", "black")}
            {DotRow("white", "black", "white")}
          </>
        )
    }
  }

  return (
    <Animated.View
      style={[
        styles.fadingContainer,
        {
          // Bind opacity to animated value
          opacity: fadeAnim,
        },
      ]}>
      {/*<View style={{*/}
      {/*  borderColor: "black",*/}
      {/*  borderWidth: 6,*/}
      {/*  borderRadius: 10,*/}
      {/*  width: 150,*/}
      {/*  maxWidth: 150,*/}
      {/*  height: 150,*/}
      {/*  maxHeight: 150*/}
      {/*}} flex={1} flexDirection="row">*/}
      {diceFace(dice)}
      {/*</View>*/}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    borderColor: "black",
    borderWidth: 6,
    borderRadius: 10,
    width: 150,
    maxWidth: 150,
    height: 150,
    maxHeight: 150,
    flex: 1,
    flexDirection: "row"
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default Dice;