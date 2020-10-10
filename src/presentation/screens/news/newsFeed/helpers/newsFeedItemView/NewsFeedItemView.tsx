import {BaseComponent} from "../../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../../model/model/appearance/Appearance";
import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {getReadLaterButtonIconColor, getStyles} from "./NewsFeedItemView.styles";
import {touchableOpacity} from "../../../../../helpers/managers/ScreenInfoProvider";

interface Props {
   title: string
   imageURL?: string
   source?: string,
   isInReadLater: boolean
   onAddToReadLaterTap?: VoidFunction
   onRemoveFromReadLaterTap?: VoidFunction
}

interface State {
}

export class NewsFeedItemView extends BaseComponent<Props, State> {

   // View
   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            {this.renderImage(appearance)}
            <View style={getStyles(appearance).content}>
               <View style={getStyles(appearance).contentContainer}>
                  <View style={getStyles(appearance).textContainer}>
                     {this.renderSource(appearance)}
                     {this.renderTitle(appearance)}
                  </View>
                  {this.renderReadLaterButton(appearance)}
               </View>
            </View>
         </View>
      )
   }

   // Image
   private renderImage(appearance: Appearance) {
      return (
         <Image
            style={getStyles(appearance).image}
            source={{uri: this.props.imageURL || ''}}
         />
      )
   }

   // Source
   private renderSource(appearance: Appearance) {
      return this.props.source && (
         <Text
            style={getStyles(appearance).source}
            numberOfLines={1}
         >
            {this.props.source}
         </Text>
      )
   }

   // Title
   private renderTitle(appearance: Appearance) {
      return (
         <Text
            style={getStyles(appearance).title}
            numberOfLines={2}
         >
            {this.props.title}
         </Text>
      )
   }

   // Read later button
   private renderReadLaterButton(appearance: Appearance) {
      return (
        <TouchableOpacity
          activeOpacity={touchableOpacity}
          style={getStyles(appearance).readLaterButton}
          onPress={() => {this.onReadLaterButtonTap()}}
        >
           <Image
             source={{uri: 'clock'}}
             style={[
                getStyles(appearance).readLaterButtonIcon,
                {tintColor: getReadLaterButtonIconColor(appearance, this.props.isInReadLater)}]}
           />
        </TouchableOpacity>
      )
   }

   private onReadLaterButtonTap() {
      if (this.props.isInReadLater) {
         if (this.props.onRemoveFromReadLaterTap !== undefined) {
            this.props.onRemoveFromReadLaterTap()
         }
      } else {
         if (this.props.onAddToReadLaterTap !== undefined) {
            this.props.onAddToReadLaterTap()
         }
      }
   }
}
