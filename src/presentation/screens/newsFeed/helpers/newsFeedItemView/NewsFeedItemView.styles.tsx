import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {StyleSheet} from "react-native";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         marginHorizontal: 12,
         marginVertical: 10,
         aspectRatio: 1.77,
         width: '100%'
      },
      image: {
         flex: 1,
         height: 160,
         width: '100%',
         position: 'absolute',
         borderRadius: 10
      },
      title: {
         color: appearance.text.primary
      },
   })
}
