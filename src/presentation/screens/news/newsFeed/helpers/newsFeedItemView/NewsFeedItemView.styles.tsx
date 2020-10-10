import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {StyleSheet} from "react-native";
import {globalMarkup} from "../../../../../helpers/managers/ScreenInfoProvider";

const borderRadius = 10
const aspectRatio = 1.25

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         justifyContent: "space-between",
         marginHorizontal: globalMarkup.marginHorizontal,
         marginVertical: 10,
         overflow: 'hidden',
         borderRadius: borderRadius,
      },
      image: {
         width: '100%',
         aspectRatio: aspectRatio,
      },
      content: {
         paddingHorizontal: 10,
         paddingBottom: 10,
         width: '100%',
         aspectRatio: aspectRatio,
         position: 'absolute',
         backgroundColor: 'rgba(0, 0, 0, 0.25)',
         flexDirection: "column-reverse",
      },
      contentContainer: {
         width: '100%',
         flexDirection: 'row',
         justifyContent: 'space-between',
      },
      textContainer: {
         flex: 1,
      },
      source: {
         paddingBottom: 6,
         fontSize: 24,
         color: 'white',
      },
      title: {
         fontSize: 20,
         color: 'white',
      },
      readLaterButton: {
         height: 40,
         width: 40,
         paddingRight: 2,
         paddingBottom: 2,
         alignItems: 'flex-end',
         justifyContent: 'flex-end',
         alignSelf: 'flex-end',
      },
      readLaterButtonIcon: {
         height: 17,
         width: 17,
      }
   })
}

export function getReadLaterButtonIconColor(appearance: Appearance, isSelected: boolean) {
   if (isSelected) {
      return appearance.action.background.primary
   } else {
      return 'white'
   }
}
