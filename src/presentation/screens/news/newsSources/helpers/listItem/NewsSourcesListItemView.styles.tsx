import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {globalMarkup} from "../../../../../helpers/managers/ScreenInfoProvider";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         marginHorizontal: globalMarkup.marginHorizontal,
      },
      title: {
         paddingTop: 12,
         color: appearance.text.primary,
         fontSize: 22,
      },
      description: {
         paddingTop: 6,
         color: appearance.text.primary,
         fontSize: 18,
      },
      filtersContainer: {
         marginTop: 6,
      },
      filterItem: {
         backgroundColor: appearance.background.tertiary,
         borderRadius: 10,
         marginRight: 6,
      },
      filterItemText: {
         paddingHorizontal: 10,
         paddingTop: 3,
         paddingBottom: 4,
         color: appearance.text.primary,
         fontSize: 16,
      }
   })
}
