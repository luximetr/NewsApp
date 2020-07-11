import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../model/model/appearance/Appearance";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      segmentedControl: {
         tintColor: 'red',
         backgroundColor: 'green',
         height: 50,
      }
   })
}
