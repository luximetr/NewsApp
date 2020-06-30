import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import React from "react";
import {View, Text, Image, ImageSourcePropType} from "react-native";
import {getStyles} from "./NewsFeedItemView.styles";

interface Props {
   title: string
   imageURL?: string
}

export class NewsFeedItemView extends BaseComponent<Props> {

   // View
   renderWith(appearance: Appearance): any {
      return (
         <View style={getStyles(appearance).container}>
            {this.renderImage(appearance)}
            {this.renderTitle(appearance)}
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
         <Text style={getStyles(appearance).title}>
            {this.props.title}
         </Text>
      )
   }
}
