import React from 'react';
import {NewsDetailsScreenView} from "./NewsDetailsScreenView";

interface Props {
   navigation: any
}

export class NewsDetailsScreen extends React.Component<Props> {

   // Back
   private onBack() {
      this.props.navigation.pop()
   }

   // View
   render() {
      return (
         <NewsDetailsScreenView
            onBack={this.onBack.bind(this)}
         />
      )
   }
}
