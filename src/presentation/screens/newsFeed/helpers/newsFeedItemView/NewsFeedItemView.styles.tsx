import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {StyleSheet} from "react-native";

export function getStyles(appearance: Appearance) {
   return StyleSheet.create({
      container: {
         backgroundColor: 'red',
         flexDirection: 'column-reverse',
         marginHorizontal: 12,
         marginVertical: 10,
         aspectRatio: 2.5,
         width: '100%'
      },
      image: {
         flex: 1,
         height: '100%',
         width: '100%',
         position: 'absolute',
         borderRadius: 10,
      },
      titleContainer: {
         paddingVertical: 20,
      },
      title: {
         color: appearance.text.primary
      },
   })
}
