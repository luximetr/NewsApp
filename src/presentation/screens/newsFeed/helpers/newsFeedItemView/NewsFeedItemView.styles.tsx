import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {StyleSheet} from "react-native";

const borderRadius = 10

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: "space-between",
         marginHorizontal: 12,
         marginVertical: 10,
      },
      image: {
         flex: 1,
         width: '100%',
         aspectRatio: 2.5,
         borderTopLeftRadius: borderRadius,
         borderTopRightRadius: borderRadius,
      },
      titleContainer: {
         backgroundColor: appearance.background.tertiary,
         borderBottomLeftRadius: borderRadius,
         borderBottomRightRadius: borderRadius,
      },
      title: {
         paddingVertical: 10,
         paddingHorizontal: 10,
         fontSize: 16,
         color: appearance.text.primary,
      },
   })
}
