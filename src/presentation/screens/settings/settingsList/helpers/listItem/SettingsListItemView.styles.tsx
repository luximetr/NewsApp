import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../../model/custom/appearance/Appearance";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      content: {
         flexDirection: "row",
         justifyContent: "space-between",
         marginTop: 12,
      },
      title: {
         marginLeft: 24,
         color: appearance.text.primary
      },
      value: {
         marginRight: 24,
         color: appearance.text.primary
      },
      divider: {
         marginHorizontal: 24,
         marginTop: 12,
         backgroundColor: appearance.divider.primary,
         height: 1,
      }
   })
}
