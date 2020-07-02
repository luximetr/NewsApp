import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../model/model/appearance/Appearance";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         flex: 1,
         backgroundColor: 'transparent',
         justifyContent: "center",
      },
   })
}
