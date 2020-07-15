import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {globalMarkup} from "../../../../../helpers/managers/ScreenInfoProvider";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         paddingHorizontal: globalMarkup.marginHorizontal,
         paddingVertical: 16,
      },
      titleText: {
         fontSize: 22,
         color: appearance.text.primary
      }
   })
}

export function getContainerColor(appearance: Appearance, isEnabled: boolean) {
   if (isEnabled) {
      return appearance.background.primary
   } else {
      return appearance.background.secondary
   }
}
