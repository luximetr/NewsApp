import React from 'react';
import {NewsDetailsScreenView} from "./NewsDetailsScreenView";
import {News} from "../../../../../model/model/news/News";

interface Props {
   route: any
   navigation: any
}

interface State {
   news: News
}

export class NewsDetailsScreen extends React.Component<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props)
      this.state = {
         news: props.route.params.news
      }
   }

   // Back
   private onBack() {
      this.props.navigation.pop()
   }

   // Share
   private onShare() {
      
   }

   // View
   render() {
      return (
         <NewsDetailsScreenView
            uri={this.state.news.url}
            onBack={this.onBack.bind(this)}
            onShare={this.onShare.bind(this)}
         />
      )
   }
}
