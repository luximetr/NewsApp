import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {globalMarkup} from "../../../../helpers/managers/ScreenInfoProvider";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         marginBottom: 10,
      },
      sectionHeader: {
         marginTop: 10,
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
      },
      sectionHeaderText: {
         marginHorizontal: globalMarkup.marginHorizontal,
         color: appearance.text.primary,
         fontSize: 18,
      },
      sectionHeaderButton: {
         marginRight: globalMarkup.marginHorizontal,
         justifyContent: 'center',
         alignItems: 'center',
         height: 34,
         width: 34,
      },
      sectionHeaderButtonIcon: {
         tintColor: appearance.action.title.primary,
         height: 14,
         width: 14,
      },
      itemsListContainer: {
         flexDirection: 'row',
      },
      itemsScrollView: {
         marginTop: 10,
      },
      item: {
         marginRight: 4,
         marginLeft: globalMarkup.marginHorizontal,
         backgroundColor: appearance.background.tertiary,
         borderRadius: 12,
      },
      itemText: {
         paddingHorizontal: 10,
         paddingVertical: 4,
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

export function getItemColor(appearance: Appearance, isEnabled: boolean) {
   if (isEnabled) {
      return appearance.background.tertiary
   } else {
      return appearance.background.secondary
   }
}
