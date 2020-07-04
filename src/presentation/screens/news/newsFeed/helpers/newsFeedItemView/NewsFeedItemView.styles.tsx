import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import {StyleSheet} from "react-native";

const borderRadius = 10
const aspectRatio = 1.25

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: "space-between",
         marginHorizontal: 12,
         marginVertical: 10,
         overflow: 'hidden',
         borderRadius: borderRadius,
      },
      image: {
         flex: 1,
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
      titleContainer: {
         flex: 1,
         width: '100%',
         position: 'absolute',
         justifyContent: "space-between",
      },
      source: {
         paddingBottom: 6,
         fontSize: 24,
         color: appearance.text.primary,
      },
      title: {
         fontSize: 20,
         color: appearance.text.primary,
      },
   })
}
