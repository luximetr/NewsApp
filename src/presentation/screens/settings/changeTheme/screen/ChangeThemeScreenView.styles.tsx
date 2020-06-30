import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {StyleSheet} from "react-native";
import {appearanceProvider} from "../../../../helpers/managers/AppearanceProvider";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      content: {
         backgroundColor: appearance.background.primary
      }
   })
}

