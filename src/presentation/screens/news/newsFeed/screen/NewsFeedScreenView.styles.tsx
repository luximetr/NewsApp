import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../model/model/appearance/Appearance";

const filterButtonSide = 60

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      filterButton: {
         height: filterButtonSide,
         width: filterButtonSide,
         position: "absolute",
         right: 25,
         bottom: 25,
         borderRadius: filterButtonSide / 2,
         backgroundColor: appearance.action.background.primary,
         alignItems: 'center',
         justifyContent: "center",
      },
      filterButtonIcon: {
         tintColor: appearance.action.title.primary,
         height: 25,
         width: 25,
      }
   })
}
