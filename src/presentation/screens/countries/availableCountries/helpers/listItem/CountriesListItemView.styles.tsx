import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {globalMarkup} from "../../../../../helpers/managers/ScreenInfoProvider";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         paddingHorizontal: globalMarkup.marginHorizontal,
         paddingVertical: 16,
         marginVertical: 4,
         marginHorizontal: 10,
         borderRadius: 12,
         borderWidth: 2,
         borderColor: appearance.background.tertiary,
      },
      titleText: {
         fontSize: 22,
         color: appearance.text.primary
      }
   })
}
