import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {globalMarkup} from "../../../../../helpers/managers/ScreenInfoProvider";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         marginHorizontal: globalMarkup.marginHorizontal,
         marginVertical: 16,
      },
      titleText: {
         fontSize: 22,
         color: appearance.text.primary
      }
   })
}
