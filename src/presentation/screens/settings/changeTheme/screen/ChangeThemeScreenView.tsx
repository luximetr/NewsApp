import * as React from 'react';
import {ScreenView} from "../../../../helpers/components/screenViews/screenView/ScreenView";
import {FlatList, TouchableOpacity} from "react-native";
import {Theme} from "../../../../../model/custom/theme/Theme";
import {ChangeThemeListItemView} from "../helpers/listItem/ChangeThemeListItemView";

interface Props {
   themes: Theme[]
   onThemePress: (theme: Theme) => void
}

export class ChangeThemeScreenView extends React.Component<Props> {

   render() {
      return (
         <ScreenView title={'Change theme'}>
            <FlatList
               data={this.props.themes}
               renderItem={(item) => {
                  return this.renderItem(item.item)
               }}
            />
         </ScreenView>
      )
   }

   // Item
   private renderItem(theme: Theme) {
      return (
         <TouchableOpacity onPress={() => {this.props.onThemePress(theme)}}>
            <ChangeThemeListItemView
               title={theme.name}
            />
         </TouchableOpacity>
      )
   }
}
