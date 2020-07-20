import React from 'react';
import FlashMessage from "react-native-flash-message";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {AppearanceComponent} from "../../baseViews/baseComponent/AppearanceComponent";
import {getStyles} from "./TopBannerView.styles";

export class TopBannerView extends AppearanceComponent {

   renderWith(appearance: Appearance): any {
      return (
         <FlashMessage
            style={getStyles(appearance).container}
         />
      )
   }
}
