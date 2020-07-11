import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      sectionHeader: {
         color: appearance.text.primary
      },
      item: {
         marginRight: 10,
         backgroundColor: appearance.background.tertiary,
      },
      itemText: {
         color: appearance.text.primary
      }
   })
}
