import * as React from 'react';
import {View, Text} from 'react-native';
import {getStyles} from './NavigationView.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {VectorIcon, VectorIconProps} from '../imageViews/icons/VectorIcon';
import {BaseComponent} from "../baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../model/custom/appearance/Appearance";

interface Props {
   title: string
   leftAction?: NavigationActionProps
   rightAction?: NavigationActionProps
}

export interface NavigationActionProps {
   icon: VectorIconProps
   action: VoidFunction
}

export class NavigationView extends BaseComponent<Props> {

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            <View style={getStyles(appearance).content}>
               {this.renderLeftAction(appearance)}
               {this.renderTitle(appearance)}
               {this.renderRightAction(appearance)}
            </View>
            <View style={getStyles(appearance).divider}/>
         </View>
      )
   }

   // Left action
   protected renderLeftAction(appearance: Appearance) {
      return this.props.leftAction && (
         <TouchableOpacity
            style={getStyles(appearance).leftAction}
            onPress={() => {this.props.leftAction?.action()}}
         >
            <VectorIcon
               name={this.props.leftAction.icon.name}
               source={this.props.leftAction.icon.source}
               size={this.props.leftAction.icon.size}
               color={this.props.leftAction.icon.color}/>
         </TouchableOpacity>
      )
   }

   // Title
   private renderTitle(appearance: Appearance) {
      return (
         <Text
            style={getStyles(appearance).title}
         >
            {this.props.title}
         </Text>
      )
   }

   // Right action
   private renderRightAction(appearance: Appearance) {
      if (this.props.rightAction) {
         return (
            <TouchableOpacity
               style={getStyles(appearance).rightAction}
               onPress={() => {this.props.leftAction?.action()}}
            >
               <VectorIcon
                  name={this.props.rightAction.icon.name}
                  source={this.props.rightAction.icon.source}
                  size={this.props.rightAction.icon.size}
                  color={this.props.rightAction.icon.color}/>
            </TouchableOpacity>
         )
      } else {
         return (
            <View style={getStyles(appearance).leftAction}/>
         )
      }
   }
}
