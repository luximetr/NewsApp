import {BaseComponent} from "../../baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {getStyles} from "../screenView/ScreenView.styles";
import {SafeAreaView, StatusBar, View} from "react-native";
import {NavigationActionProps, NavigationView} from "../../navigationViews/NavigationView";
import * as React from "react";
import {VectorIconSource} from "../../imageViews/icons/VectorIcon";

interface Props {
   title: string
   leftTopBarButton?: TopBarScreenLeftButton
   rightTopBarButton?: TopBarScreenRightButton
}

export interface TopBarScreenLeftButton {
   action: VoidFunction,
   iconName?: string,
   iconSource?: VectorIconSource,
   iconSize?: number,
   iconColor?: string
}

export interface TopBarScreenRightButton {
   action: VoidFunction,
   iconName: string,
   iconSource?: VectorIconSource,
   iconSize?: number,
   iconColor?: string
}

export class TopBarScreenView extends BaseComponent<Props> {

   renderWith(appearance: Appearance): any {
      const styles = getStyles(appearance)
      return (
         <View style={styles.container}>
            <StatusBar barStyle={appearance.statusBar.style}/>
            <SafeAreaView style={styles.aboveSafeArea}/>
            <SafeAreaView style={styles.safeArea}>
               {this.renderNavigation(appearance)}
               {this.props.children}
            </SafeAreaView>
            <SafeAreaView style={styles.underSafeArea}/>
         </View>
      )
   }

   private renderNavigation(appearance: Appearance) {
      return (
         <NavigationView
            title={this.props.title}
            leftAction={this.getNavigationLeftAction(appearance)}
            rightAction={this.getNavigationRightAction(appearance)}
         />
      )
   }

   protected getNavigationLeftAction(appearance: Appearance) {
      if (this.props.leftTopBarButton) {
         return {
            icon: {
               name: this.props.leftTopBarButton.iconName || 'ios-arrow-back',
               source: this.props.leftTopBarButton.iconSource || "ion",
               size: 30,
               color: appearance.navigation.tint
            },
            action: this.props.leftTopBarButton.action
         } as NavigationActionProps
      } else {
         return undefined
      }
   }

   protected getNavigationRightAction(appearance: Appearance) {
      if (this.props.rightTopBarButton) {
         return {
            icon: {
               name: this.props.rightTopBarButton.iconName,
               source: this.props.rightTopBarButton.iconSource,
               size: 30,
               color: appearance.navigation.tint
            },
            action: this.props.rightTopBarButton.action
         } as NavigationActionProps
      }
   }
}
