import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {globalMarkup} from "../../../../../helpers/managers/ScreenInfoProvider";

const itemSide = 60
const indicatorSide = itemSide - 6

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         paddingVertical: 10,
         marginTop: 10,
         backgroundColor: appearance.background.tertiary,
         marginHorizontal: globalMarkup.marginHorizontal,
         borderRadius: 10
      },
      item: {
         height: itemSide,
         width: itemSide,
         borderRadius: itemSide / 2,
         alignItems: "center",
         justifyContent: "center",
         marginLeft: 10,
         backgroundColor: appearance.background.secondary,
      },
      itemText: {
         color: appearance.text.primary,
         fontSize: 16,
      },
      selectingIndicator: {
         position: "absolute",
         height: indicatorSide,
         width: indicatorSide,
         borderWidth: 3,
         borderColor: appearance.background.tertiary,
         borderRadius: indicatorSide / 2,
         marginLeft: 13,
         marginTop: 3,
      }
   })
}
