import {StyleSheet} from 'react-native';
import {Appearance} from "../../../../../model/custom/appearance/Appearance";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         flex: 1
      },
      aboveSafeArea: {
         backgroundColor: appearance.navigation.background,
         flex: 0,
      },
      safeArea: {
         flex: 1,
         backgroundColor: appearance.background.primary
      },
      underSafeArea: {
         backgroundColor: appearance.background.primary,
         flex: 0
      },
   })
}
