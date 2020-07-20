import React from 'react';
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {WebView} from 'react-native-webview';
import {getStyles} from "./NewsDetailsScreenView.styles";
import {Image, TouchableOpacity} from "react-native";
import {touchableOpacity} from "../../../../helpers/managers/ScreenInfoProvider";
import {translate} from "../../../../../app/repos/appLanguagesRepo/repo/AppLanguagesRepo";

interface Props {
   uri: string
   onBack: VoidFunction
   onShare: VoidFunction
}

interface State {
   title: string
}

export class NewsDetailsScreenView extends BaseComponent<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         title: translate('news_details_title')
      }
   }

   // Render
   renderWith(appearance: Appearance): any {
      return (
         <TopBarScreenView
            title={this.state.title}
            leftTopBarButton={{
               action: () => {this.props.onBack()}
            }}
         >
            {this.renderContent(appearance)}
            {this.renderShareButton(appearance)}
         </TopBarScreenView>
      )
   }

   // Content
   private renderContent(appearance: Appearance) {
      return (
         <WebView
            source={{uri: this.props.uri}}
            style={getStyles(appearance).webView}
         />
      )
   }

   // Share button
   protected renderShareButton(appearance: Appearance) {
      return (
         <TouchableOpacity
            activeOpacity={touchableOpacity}
            style={getStyles(appearance).shareButton}
            onPress={() => {this.props.onShare()}}
         >
            <Image source={require('../../../../helpers/assets/share.png')} style={getStyles(appearance).shareButtonIcon} />
         </TouchableOpacity>
      )
   }

}
