import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import React from "react";
import {View, Text, Image} from "react-native";
import {getStyles} from "./NewsFeedItemView.styles";

interface Props {
   title: string
   imageURL?: string
}

interface State {
}

export class NewsFeedItemView extends BaseComponent<Props, State> {

   // View
   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            {this.renderImage(appearance)}
            <View style={getStyles(appearance).titleContainer}>
               {this.renderTitle(appearance)}
            </View>
         </View>
      )
   }

   // Image
   private renderImage(appearance: Appearance) {
      return this.props.imageURL && (
         <Image
            style={getStyles(appearance).image}
            source={{uri: this.props.imageURL}}
         />
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
}
