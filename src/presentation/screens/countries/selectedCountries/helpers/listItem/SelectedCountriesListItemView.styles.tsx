import {StyleSheet, ViewStyle} from "react-native";
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
      },
      titleText: {
         fontSize: 22,
         color: appearance.text.primary
      }
   })
}

export function getContainerStyle(appearance: Appearance, isEnabled: boolean) {
   const generalStyle = getStyles(appearance).container
   let specifiedStyle
   if (isEnabled) {
      specifiedStyle = {

      }
   } else {
      specifiedStyle = {
         borderWidth: 1,
      }
   }
   return [generalStyle, specifiedStyle]
}

export function getContainerColor(appearance: Appearance, isEnabled: boolean) {
   if (isEnabled) {
      return appearance.background.tertiary
   } else {
      return appearance.background.secondary
   }
}
