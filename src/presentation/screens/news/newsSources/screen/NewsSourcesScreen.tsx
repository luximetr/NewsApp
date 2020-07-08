import React from 'react';
import {NewsSourcesScreenView} from "./NewsSourcesScreenView";

interface Props {
   navigation: any
}

export class NewsSourcesScreen extends React.Component<Props> {

   // Back
   private onBack() {
      this.props.navigation.pop()
   }

   // View
   render() {
      return (
         <NewsSourcesScreenView
            onBack={this.onBack.bind(this)}
         />
      )
   }
}
