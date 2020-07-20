import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../model/model/appearance/Appearance";

const filterButtonSide = 60

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      button: {
         height: filterButtonSide,
         width: filterButtonSide,
         position: "absolute",
         right: 25,
         bottom: 25,
         borderRadius: filterButtonSide / 2,
         backgroundColor: appearance.action.background.primary,
         alignItems: 'center',
         justifyContent: "center",
         shadowRadius: 5,
         shadowColor: 'black',
         shadowOpacity: 0.4,
         shadowOffset: {height: 3, width: 3}
      },
      buttonIcon: {
         tintColor: appearance.action.title.primary,
         height: 25,
         width: 25,
      }
   })
}
