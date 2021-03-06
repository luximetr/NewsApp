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
         marginBottom: globalMarkup.marginHorizontal,
         marginHorizontal: globalMarkup.marginHorizontal,
         backgroundColor: appearance.background.tertiary,
         borderRadius: 10,
         justifyContent: "center",
      },
      item: {
         height: itemSide,
         width: itemSide,
         borderRadius: itemSide / 2,
         marginLeft: 10,
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
