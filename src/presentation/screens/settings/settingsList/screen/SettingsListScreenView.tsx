import * as React from 'react';
import {ScreenView} from "../../../../helpers/components/screenViews/screenView/ScreenView";
import {SettingsListItemView} from "../helpers/listItem/SettingsListItemView";

interface Props {
   selectedLanguageName: string
   onSelectLanguage: VoidFunction
   selectedThemeName: string
   onSelectTheme: VoidFunction
}

interface State {
   title: string
}

export class SettingsListScreenView extends React.Component<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         title: "Settings"
      }
   }

   // Render
   render() {
      return (
         <ScreenView title={this.state.title}>
            {this.renderLanguageItem()}
            {this.renderThemeItem()}
         </ScreenView>
      )
   }

   // Language item
   private renderLanguageItem() {
      return (
         <SettingsListItemView
            title={'Language'}
            value={this.props.selectedLanguageName}
            onSelect={this.props.onSelectLanguage.bind(this)}
         />
      )
   }

   // Theme item
   private renderThemeItem() {
      return (
         <SettingsListItemView
            title={'Theme'}
            value={this.props.selectedThemeName}
            onSelect={this.props.onSelectTheme.bind(this)}
         />
      )
   }
}
