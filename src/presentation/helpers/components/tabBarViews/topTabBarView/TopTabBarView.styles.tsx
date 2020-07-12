import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../model/model/appearance/Appearance";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      indicator: {
         backgroundColor: appearance.tabBar.selectedTint
      },
      tabBar: {
         backgroundColor: appearance.background.secondary,
         borderBottomWidth: 1,
         borderBottomColor: appearance.background.tertiary,
      }
   })
}
