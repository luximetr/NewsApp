import React from 'react';
import {SelectCountriesScreenView} from "./SelectCountriesScreenView";

interface Props {
   navigation: any
}

export class SelectCountriesScreen extends React.Component<Props> {

   // Back
   private onBack() {
      this.props.navigation.pop()
   }

   // View
   render() {
      return (
         <SelectCountriesScreenView
            onBack={this.onBack.bind(this)}
         />
      )
   }
}
