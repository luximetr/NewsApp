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
      titleContainer: {
         flex: 1,
         width: '100%',
         position: 'absolute',
         justifyContent: "space-between",
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
   })
}
