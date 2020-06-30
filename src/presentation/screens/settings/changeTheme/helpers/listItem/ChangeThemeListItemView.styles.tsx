import {Appearance} from "../../../../../../model/custom/appearance/Appearance";
import {StyleSheet} from "react-native";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      title: {
         marginHorizontal: 20,
         marginVertical: 10,
         color: appearance.text.primary,
         fontSize: 20,
      }
   })
}
