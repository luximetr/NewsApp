import React from 'react';
import {BaseComponent} from "../../../../helpers/components/baseViews/baseComponent/BaseComponent";
import {Appearance} from "../../../../../model/model/appearance/Appearance";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {WebView} from 'react-native-webview';
import {getStyles} from "./NewsDetailsScreenView.styles";
import {translate} from "../../../../../app/repos/appLanguagesRepo/repo/Translator";
import {FloatRoundButton} from "../../../../helpers/components/buttons/floatRoundButton/FloatRoundButton";

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
            {this.renderShareButton()}
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
   protected renderShareButton() {
      return (
         <FloatRoundButton
             imageSource={{uri: 'share'}}
             onPress={() => {this.props.onShare()}}
         />
      )
   }

}
