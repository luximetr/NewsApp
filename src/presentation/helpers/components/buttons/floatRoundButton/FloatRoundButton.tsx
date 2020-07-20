import React from 'react';
import {AppearanceComponent} from "../../baseViews/baseComponent/AppearanceComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {getStyles} from "./FloatRoundButton.styles";
import {touchableOpacity} from "../../../managers/ScreenInfoProvider";
import {Image, ImageSourcePropType, SafeAreaView, TouchableOpacity} from "react-native";

interface Props {
   imageSource: ImageSourcePropType
   onPress: VoidFunction
}

export class FloatRoundButton extends AppearanceComponent<Props> {

   renderWith(appearance: Appearance): any {
      return (
         <TouchableOpacity
            style={getStyles(appearance).button}
            activeOpacity={touchableOpacity}
            onPress={() => {this.props.onPress()}}
         >
            <Image source={this.props.imageSource} style={getStyles(appearance).buttonIcon} />
         </TouchableOpacity>
      )
   }
}
