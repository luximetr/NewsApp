import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {globalMarkup} from "../../../../../helpers/managers/ScreenInfoProvider";

const itemSide = 60

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
         borderColor: appearance.background.reversePrimary,
         borderWidth: 1,
         marginLeft: 10,
      },
      itemText: {
         color: appearance.text.primary,
         fontSize: 16,
      }
   })
}
