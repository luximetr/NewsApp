import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import React from "react";
import {View, Text, Image} from "react-native";
import {getStyles} from "./NewsFeedItemView.styles";
import ImageColors from "react-native-image-colors"

interface Props {
   title: string
   imageURL?: string
}

interface State {
   color: string
}

export class NewsFeedItemView extends BaseComponent<Props, State> {

   constructor(props: Props) {
      super(props);
      this.state = {
         color: 'white'
      }
   }

   componentDidMount(): void {
      ImageColors.getColors(this.props.imageURL || '', {})
         .then((result) => {
            if (result.platform === "ios") {
               this.setState({color: result.background || ''})
            }
         })
         .catch()
   }

   // View
   renderWith(appearance: Appearance): any {
      return (
         <View style={[getStyles(appearance).container, {backgroundColor: this.state.color}]}>
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
