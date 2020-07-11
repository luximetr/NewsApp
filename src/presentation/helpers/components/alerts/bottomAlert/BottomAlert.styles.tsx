import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../model/model/appearance/Appearance";

const cornerRadius = 12
const swipeLineHeight = 4

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      modal: {
         justifyContent: 'flex-end',
         margin: 0
      },
      contentContainer: {
         backgroundColor: appearance.background.secondary,
         borderTopLeftRadius: cornerRadius,
         borderTopRightRadius: cornerRadius,
      },
      swipeLine: {
         marginTop: 12,
         backgroundColor: appearance.background.tertiary,
         height: swipeLineHeight,
         borderRadius: swipeLineHeight / 2,
         width: '30%',
         alignSelf: "center",
      },
   })
}
