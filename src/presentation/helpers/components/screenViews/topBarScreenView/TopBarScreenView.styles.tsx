import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../model/model/appearance/Appearance";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         flex: 1
      },
      aboveSafeArea: {
         backgroundColor: appearance.background.primary,
         flex: 0,
      },
      safeArea: {
         flex: 1,
      },
      underSafeArea: {
         backgroundColor: appearance.background.primary,
         flex: 0
      },
   })
}
