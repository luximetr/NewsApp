import * as React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {getStyles} from './ScreenView.styles';
import {BaseComponent} from "../../baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/custom/appearance/Appearance";

interface Props {
  title: string
}

export class ScreenView extends BaseComponent<Props> {

   renderWith(appearance: Appearance): any {
      const styles = getStyles(appearance)
      return (
         <View style={styles.container}>
            <StatusBar barStyle={appearance.statusBar.style}/>
            <SafeAreaView style={styles.aboveSafeArea}/>
            <SafeAreaView style={styles.safeArea}>
               {this.props.children}
            </SafeAreaView>
            <SafeAreaView style={styles.underSafeArea}/>
         </View>
      )
   }
}
