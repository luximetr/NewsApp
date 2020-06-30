import * as React from 'react';
import {ChangeThemeScreenView} from "./ChangeThemeScreenView";
import {appearanceProvider} from "../../../../helpers/managers/AppearanceProvider";
import {AppearanceType} from "../../../../../model/model/appearance/AppearanceType";
import {ChangeThemeItem} from "../helpers/model/ChangeThemeItem";
import {Appearance} from "../../../../../model/model/appearance/Appearance";

interface Props {
   navigation: any
}

interface State {
   themes: ChangeThemeItem[]
}

export class ChangeThemeScreen extends React.Component<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         themes: [
            {
               name: 'Light',
               appearanceType: AppearanceType.light
            },
            {
               name: 'Dark',
               appearanceType: AppearanceType.dark
            }
         ]
      }
   }

   protected onThemePress(theme: ChangeThemeItem) {
      appearanceProvider.setCurrentAppearanceByType(theme.appearanceType)
   }

   // Back
   private onBack() {
      this.props.navigation.pop()
   }

   // View
   render() {
      return (
         <ChangeThemeScreenView
            themes={this.state.themes}
            onThemePress={this.onThemePress.bind(this)}
            onBack={this.onBack.bind(this)}
         />
      )
   }
}
