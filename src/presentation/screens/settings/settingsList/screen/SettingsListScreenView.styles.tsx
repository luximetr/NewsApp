import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../model/model/appearance/Appearance";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      content: {
         flexDirection: 'column-reverse',
         flex: 1
      },
      pickersContainer: {
         flexDirection: "row",
         justifyContent: "space-between",
         marginHorizontal: 14,
         marginBottom: 10,
      },
      pickerHeaderText: {
         paddingLeft: 14,
         paddingTop: 12,
         color: appearance.text.primary,
         fontSize: 18,
      },
      previewContainer: {
         flex: 1,
      }
   })
}
