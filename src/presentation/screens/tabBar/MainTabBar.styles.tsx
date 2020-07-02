import {Appearance} from "../../../model/model/appearance/Appearance";
import {StyleSheet} from "react-native";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      tabBar: {
         backgroundColor: appearance.background.secondary,
         borderTopColor: appearance.background.tertiary
      }
   })
}

export function getActiveTintColor(appearance: Appearance) {
   return appearance.tabBar.selectedTint
}

export function getInactiveTintColor(appearance: Appearance) {
   return appearance.tabBar.unselectedTint
}
