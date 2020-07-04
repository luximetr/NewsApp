import * as React from 'react';
import {SettingsListItemView} from "../helpers/listItem/SettingsListItemView";
import {TopBarScreenView} from "../../../../helpers/components/screenViews/topBarScreenView/TopBarScreenView";
import {View} from "react-native";

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
         <TopBarScreenView title={this.state.title}>
            <View style={{flexDirection: 'column-reverse', flex: 1}}>
               {this.renderLanguageItem()}
               {this.renderThemeItem()}
            </View>
         </TopBarScreenView>
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
