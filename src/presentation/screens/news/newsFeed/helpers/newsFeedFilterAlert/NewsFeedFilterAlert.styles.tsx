import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {globalMarkup} from "../../../../../helpers/managers/ScreenInfoProvider";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      sectionHeader: {
         marginHorizontal: globalMarkup.marginHorizontal,
         marginTop: 10,
         color: appearance.text.primary,
         fontSize: 18,
      },
      itemsListContainer: {
         flexDirection: 'row',
      },
      itemsScrollView: {
         marginTop: 10,
      },
      item: {
         marginRight: 10,
         marginLeft: globalMarkup.marginHorizontal,
         backgroundColor: appearance.background.tertiary,
      },
      itemText: {
         color: appearance.text.primary,
         fontSize: 16,
      },
      moreButton: {
         marginHorizontal: globalMarkup.marginHorizontal,
      },
      moreButtonText: {
         color: appearance.text.primary
      }
   })
}
