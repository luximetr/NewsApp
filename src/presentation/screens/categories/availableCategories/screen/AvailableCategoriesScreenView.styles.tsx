import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {globalMarkup} from "../../../../helpers/managers/ScreenInfoProvider";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         flex: 1,
      },
   })
}
