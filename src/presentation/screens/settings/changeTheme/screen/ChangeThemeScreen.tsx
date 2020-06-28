import * as React from 'react';
import {ChangeThemeScreenView} from "./ChangeThemeScreenView";
import {Theme} from "../../../../../model/custom/theme/Theme";
import {ThemeType} from "../../../../../model/custom/theme/ThemeType";

interface Props {

}

interface State {
   themes: Theme[]
}

export class ChangeThemeScreen extends React.Component<Props, State> {

   // Life cycle
   constructor(props: Props) {
      super(props);
      this.state = {
         themes: [
            {
               name: 'Light',
               type: ThemeType.light
            },
            {
               name: 'Dark',
               type: ThemeType.dark
            }
         ]
      }
   }

   private onThemePress(theme: Theme) {
      console.log(theme.name)
   }

   // View
   render() {
      return (
         <ChangeThemeScreenView
            themes={this.state.themes}
            onThemePress={this.onThemePress.bind(this)}
         />
      )
   }
}
