import {View} from "react-native";

const DotRow = (color1, color2, color3) => {
  return (
    <View style={{justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 10}} flex={1}>
      <View style={{backgroundColor: `${color1}`, borderRadius: 15, width: 30, height: 30}}/>
      <View style={{backgroundColor: `${color2}`, borderRadius: 15, width: 30, height: 30}}/>
      <View style={{backgroundColor: `${color3}`, borderRadius: 15, width: 30, height: 30}}/>
    </View>
  )
}

export default DotRow;