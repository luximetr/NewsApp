import {StyleSheet} from 'react-native';
import {Appearance} from "../../../../model/model/appearance/Appearance";

export function getStyles(appearance: Appearance) {
  return StyleSheet.create({
    container: {
      backgroundColor: appearance.navigation.background,
      height: 44,
      justifyContent: "space-between"
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 10,
    },
    title: {
      flex: 1,
      textAlign: 'center',
      color: appearance.navigation.text,
      fontSize: 20,
    },
    leftAction: {
      paddingLeft: 24,
    },
    rightAction: {
      paddingRight: 24,
    },
    divider: {
      backgroundColor: appearance.navigation.shadow,
      height: 1
    }
  })
}
