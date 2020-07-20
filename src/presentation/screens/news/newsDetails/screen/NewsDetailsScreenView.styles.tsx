import {StyleSheet} from "react-native";
import {Appearance} from "../../../../../model/model/appearance/Appearance";

const shareButtonSide = 60

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      webView: {
         flex: 1,
      },
      shareButton: {
         height: shareButtonSide,
         width: shareButtonSide,
         position: "absolute",
         right: 25,
         bottom: 25,
         borderRadius: shareButtonSide / 2,
         backgroundColor: appearance.action.background.primary,
         alignItems: 'center',
         justifyContent: "center",
      },
      shareButtonIcon: {
         tintColor: appearance.action.title.primary,
         height: 25,
         width: 25,
      }
   })
}
