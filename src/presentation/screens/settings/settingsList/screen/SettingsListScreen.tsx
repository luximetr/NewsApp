import * as React from 'react';
import {SettingsListScreenView} from "./SettingsListScreenView";
import {AppearanceType} from "../../../../../model/model/appearance/AppearanceType";
import {appearanceProvider} from "../../../../helpers/managers/AppearanceProvider";

interface Props {
   navigation: any
}

interface State {
   themes: AppearanceType[]
}

export class SettingsListScreen extends React.Component<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         themes: appearanceProvider.getAppearanceTypesList()
      }
   }

   // Language
   private onSelectLanguage() {

   }

   // Theme
   protected onSelectTheme(appearanceType: AppearanceType) {
      appearanceProvider.setCurrentAppearanceByType(appearanceType)
   }

   // View
   render() {
      return (
         <SettingsListScreenView
            selectedLanguageName={'En'}
            onSelectLanguage={this.onSelectLanguage.bind(this)}
            themes={this.state.themes}
            onSelectTheme={this.onSelectTheme.bind(this)}
         />
      )
   }
}
