import * as React from 'react';
import {SettingsListScreenView} from "./SettingsListScreenView";

interface Props {
   navigation: any
}

export class SettingsListScreen extends React.Component<Props> {

   // Language
   private onSelectLanguage() {

   }

   // Theme
   private onSelectTheme() {
      this.props.navigation.push('ChangeTheme')
   }

   // View
   render() {
      return (
         <SettingsListScreenView
            selectedLanguageName={'En'}
            onSelectLanguage={this.onSelectLanguage.bind(this)}
            selectedThemeName={'Dark'}
            onSelectTheme={this.onSelectTheme.bind(this)}
         />
      )
   }
}
