import React from 'react';
import {SelectCategoriesScreenView} from "./SelectCategoriesScreenView";

interface Props {
   navigation: any
}

export class SelectCategoriesScreen extends React.Component<Props> {

   // onBack
   private onBack() {
      this.props.navigation.pop()
   }

   // Render
   render() {
      return (
         <SelectCategoriesScreenView
            onBack={this.onBack.bind(this)}
         />
      )
   }
}
